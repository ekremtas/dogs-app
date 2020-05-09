import * as Actions from "./types";
import axios from "axios";

const apiHost = "https://5ea5689e2d86f00016b45bf7.mockapi.io";

export const listDogs = () => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOADING_PAGE,
    });
    axios
      .get(`${apiHost}/favorites`)
      .then((result) => {
        dispatch({
          type: Actions.LIST_DOG,
          payload: result.data,
        });
      })
      .catch((err) => {
        console.log("Axios err", err);
      });
  };
};

export const addDog = (dogId) => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOADING_FAVBUTTON,
      payload: dogId,
    });
    axios
      .post(`${apiHost}/favorites`, {
        dogId,
      })
      .then((result) => {
        dispatch({
          type: Actions.ADD_DOG,
          payload: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteDog = (dog) => {
  return (dispatch) => {
    dispatch({
      type: Actions.LOADING_FAVBUTTON,
      payload: dog.dogId,
    });
    axios
      .delete(`${apiHost}/favorites/${dog.id}`)
      .then((result) => {
        dispatch({
          type: Actions.DELETE_DOG,
          payload: dog,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
