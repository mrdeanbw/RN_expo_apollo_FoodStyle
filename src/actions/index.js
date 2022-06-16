export const getCards = () => (dispatch) => {
  try {
    // call graphql
    dispatch({
      type: "GET_CARDS",
      payload: "list",
    });
  } catch (e) {
    console.log("error occured dispatching", e);
  }
};
