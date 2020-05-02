import React, { Img } from "react";
import dogs from "../dogsdata";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
} from "reactstrap";
const Detail = (props) => {
  const dogId = props.match.params.dogId;
  const selectedDogs = dogs.find((dog) => dog.id === dogId);
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
              <CardTitle>{selectedDogs.name}</CardTitle>
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
