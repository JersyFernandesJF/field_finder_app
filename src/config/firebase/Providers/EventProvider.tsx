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

export interface EventInfo {
  name: string;
}
export interface EventDatabaseContextModel {
  event: EventInfo[];
  isLoading: boolean;
}
export const EventDatabaseContextModel =
  createContext<EventDatabaseContextModel>({} as EventDatabaseContextModel);
export const useEventDatabase = (): EventDatabaseContextModel => {
  return useContext(EventDatabaseContextModel);
};
export const EventDataBaseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [event, setEvent] = useState<EventInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    get(child(dbRef, `events`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setEvent(snapshot.val());
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
    event,
    isLoading,
  };

  return (
    <EventDatabaseContextModel.Provider value={values}>
      {children}
    </EventDatabaseContextModel.Provider>
  );
};
export const useEventList = (): EventInfo[] => {
  const { event } = useEventDatabase();
  return event;
};
