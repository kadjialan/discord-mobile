import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36393E",
    flex: 1,
    padding: 10,
    paddingVertical: 30,
  },
  chatsWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center"
  },
  sidebar: {
    width: 60,
    height: "100vh",
    backgroundColor: "#606070",
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    padding: 7,
  },
  picture: {
    width: 52,
    height: 52,
    borderRadius: 70,
    marginBottom: 20,
    alignSelf: "center",
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 70,
  },
  contacts: {
    width: 240,
    height: "100vh",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: "#606070",
    borderRadius: 5,
  },
  h1: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#202225",
    marginVertical: 5,
    padding: 11,
    color: "white",
    borderRadius: 3,
  },
  contactInfos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginBottom: 15,
    backgroundColor: "#ede4e4d1",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  }
});
