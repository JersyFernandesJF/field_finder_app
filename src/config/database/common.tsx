import { Alert, Platform } from "react-native";

const server =
  Platform.OS === "ios" ? "http://localhost:3000" : "http://10.0.0.3000";

export { server };
