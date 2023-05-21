import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { database } from "~/config/firebase/firebase";
import { ref, child, get } from "firebase/database";

const dbRef = ref(database);

export interface SportsInfo {
  name: string;
  description: string;
}
export interface SportsDatabaseContextModel {
  sports: SportsInfo[];
  isLoading: boolean;
  filterSports: (nameFilter?: string) => SportsInfo[];
}
export const SportsDatabaseContext = createContext<SportsDatabaseContextModel>(
  {} as SportsDatabaseContextModel
);
export const useSportsDatabase = (): SportsDatabaseContextModel => {
  return useContext(SportsDatabaseContext);
};
export const SportsDatabaseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sports, setSports] = useState<SportsInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    get(child(dbRef, `sports`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setSports(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filterSports = (nameFilter?: string): SportsInfo[] => {
    let filteredSports = [...sports];
    if (nameFilter) {
      filteredSports = filteredSports.filter((sport) =>
        sport.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
    return filteredSports;
  };
  const values = {
    sports,
    isLoading,
    filterSports,
  };
  return (
    <SportsDatabaseContext.Provider value={values}>
      {children}
    </SportsDatabaseContext.Provider>
  );
};
export const useSportsList = (): SportsInfo[] => {
  const { sports } = useSportsDatabase();
  return sports;
};
