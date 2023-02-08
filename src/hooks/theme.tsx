import { createContext, useContext } from "react";
import { THEME } from "../theme/theme";

type ThemeProviderProps = {
  children: React.ReactNode;
  theme?: typeof THEME;
};

const ThemeContext = createContext({ theme: THEME });

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = THEME,
}) => {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};
