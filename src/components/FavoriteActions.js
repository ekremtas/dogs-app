import React from "react";
import { Button, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { addDog, deleteDog } from "../redux/actions";

const FavoriteActions = (props) => {
  const getStatus = (dogId) => {
    return props.favorites.find((favorite) => favorite.dogId === dogId);
  };
  if (
    props.buttonLoading.find((id) => {
      return id === props.id;
    })
  ) {
    return <Spinner color="success" />;
  } else
    return (
      <>
        {getStatus(props.id) ? (
          <Button
            color="danger"
            onClick={() => {
              props.deleteDog(getStatus(props.id));
            }}
          >
            Favorilerden Cikar
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() => {
              props.addDog(props.id);
            }}
          >
            Favoriye Ekle
          </Button>
        )}
      </>
    );
};

const mapStateToProps = (state) => {
  const { buttonLoading, favorites } = state.dogReducer;
  return {
    buttonLoading,
    favorites,
  };
};

const mapDispatchToProps = {
  addDog,
  deleteDog,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);
