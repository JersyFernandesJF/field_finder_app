import { useTheme } from "~/hooks/theme";
import { StyleSheet } from "react-native"

const { colors, fonts } = useTheme();

export const styles = StyleSheet.create(
  {
  image: {
    width: 140, height: 140, borderRadius: 10
  },
  comment: {
    width: 160,
    height: 190,
    backgroundColor: "#ffff",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  price:{
    fontFamily: fonts.inter[500], 
    fontSize: 14, 
    color: colors.green[1]
  }, 
  name: {
    fontSize: 14, 
    fontFamily: fonts.inter[600]
  }
})