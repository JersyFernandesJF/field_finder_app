import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { database } from "~/config/firebase/firebase";
import { ref, child, get } from "firebase/database";
import { server } from "~/config/database/common";
import axios from "axios";

const dbRef = ref(database);

export interface FieldsInfo {
  rules: string[];
  capacity: number;
  code_postal: string;
  details: string;
  name: string;
  price: number;
  availability: boolean;
  address: string;
}
export interface FieldsDatabaseContextModel {
  fields: FieldsInfo[];
  isLoading: boolean;
}
export const FieldsDatabaseContextModel =
  createContext<FieldsDatabaseContextModel>({} as FieldsDatabaseContextModel);
export const useFieldsDatabase = (): FieldsDatabaseContextModel => {
  return useContext(FieldsDatabaseContextModel);
};
export const FieldsDataBaseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fields, setFields] = useState<FieldsInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fiedlsTest, setFieldsTest] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${server}/field`);
      setFieldsTest(response.data);
      console.log(fiedlsTest);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
    get(child(dbRef, `fields`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFields(snapshot.val());
          console.log;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const values = {
    fields,
    isLoading,
  };

  return (
    <FieldsDatabaseContextModel.Provider value={values}>
      {children}
    </FieldsDatabaseContextModel.Provider>
  );
};
export const useFieldsList = (): FieldsInfo[] => {
  const { fields } = useFieldsDatabase();
  return fields;
};
