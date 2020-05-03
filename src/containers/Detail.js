import React from "react";
import dogs from "../dogsdata";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
const Detail = (props) => {
  const dogId = props.match.params.dogId;
  const selectedDogs = dogs.find((dog) => dog.id === dogId);
  if (!selectedDogs) {
    return (
      <div className="h1 alert">{`${dogId} numaralı olan köpeğe ulaşılamadı.`}</div>
    );
  }
  return (
    <>
      <Row
        style={{
          textAlign: "center",
        }}
      >
        <Col md={{ size: 10, offset: 1 }}>
          <Card>
            <CardBody>
              <CardTitle className="h1">{selectedDogs.name}</CardTitle>
              <CardSubtitle>{selectedDogs.breed}</CardSubtitle>
            </CardBody>
            <CardImg
              style={{
                objectFit: "contain",
              }}
              top
              height="500px"
              src={selectedDogs.image}
              alt={selectedDogs.name + " image"}
            />
            <CardBody>
              <CardText
                style={{
                  textAlign: "center",
                }}
              >
                {selectedDogs.description}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Detail;
