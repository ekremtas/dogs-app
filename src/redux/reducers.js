import * as Actions from "./types";

const initialState = {
  favorites: [],
  loadingFavorites: false,
  buttonLoading: [],
};

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LIST_DOG:
      return { ...state, favorites: action.payload , loadingFavorites: false };
    case Actions.LOADING_PAGE:
      return { ...state, loadingFavorites: true };
    case Actions.ADD_DOG:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        buttonLoading: state.buttonLoading.filter((id) => {
          return id !== action.payload.dogId;
        }),
      };
      case Actions.DELETE_DOG:
        return {
          ...state,
          favorites: state.favorites.filter((dog) => {
            return dog.dogId !== action.payload.dogId;
          }),
          buttonLoading: state.buttonLoading.filter((id) => {
            return id !== action.payload.dogId;
          }),
        };
    case Actions.LOADING_FAVBUTTON:
      return {
        ...state,
        buttonLoading: [...state.buttonLoading, action.payload],
      };
    default:
      return state;
  }
};
