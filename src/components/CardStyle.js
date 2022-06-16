import { StyleSheet } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  cardContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 14,
    fontSize: 22,
    marginVertical: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.greyishBrown,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 50,
    color: "white",
  },
});
export default styles;
