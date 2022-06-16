import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 6,
    paddingVertical: 14,
    fontSize: 22,
    marginVertical: 6,
    bottom: 0,
    shadowColor: colors.greyish40,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  linearGradientContainer: {
    height: 150,
    position: "absolute",
    width: "100%",
  },
  logoContainer: {
    paddingHorizontal: 18,
    paddingTop: 50,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.greyishBrown,
  },
  cardListContainer: {
    paddingHorizontal: 18,
    marginTop: 100,
  },
  bottomContainer: {
    paddingHorizontal: 18,
    zIndex: 100,
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
  bottomBar: {
    backgroundColor: colors.white,
    width: "100%",
    height: 56,
    position: "absolute",
    bottom: 0,
  },
});
export default styles;
