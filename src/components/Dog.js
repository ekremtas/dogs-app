import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
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

const Dog = ({ id, name, toggle, getStatus, image , buttonLoading}) => {
  return (
    <li
      key={id}
      style={{
        margin: "15px",
        listStyleType: "none",
      }}
    >
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
        <CardImg top width="100%" src={image} alt={name + " image"} />
        <CardBody>
          <CardText
            style={{
                textAlign: "center",
            }}
          >
            {`${name} hakkında daha fazla bilgi alabilmek için detaya gidebilirsiniz.`}
          </CardText>
          <Row>
            <Col md={{ size: 4, offset: 1 }}>
              <FavoriteActions buttonLoading={buttonLoading} toggle={toggle} id={id} getStatus={getStatus} />
            </Col>
            <Col md={{ size: 3, offset: 4 }}>
              <CardLink>
                <Link to={`/detail/${id}`}>Detay'a Git</Link>
              </CardLink>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </li>
  );
};

export default Dog;
