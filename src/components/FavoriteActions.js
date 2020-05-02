import React from "react";
import { Button, Spinner } from "reactstrap";

const FavoriteActions = (props) => {
  if (props.buttonLoading) {
    return <Spinner color="success" />;
  } else
    return (
      <>
        {props.getStatus(props.id) ? (
          <Button
            color="danger"
            onClick={() => {
              props.toggle(props.id);
            }}
          >
            Favorilerden Cikar
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() => {
              props.toggle(props.id);
            }}
          >
            Favoriye Ekle
          </Button>
        )}
      </>
    );
};

export default FavoriteActions;
