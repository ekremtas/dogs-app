import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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

const Dog = ({ id, name, toggle, getStatus, image, buttonLoading }) => {
  return (
    <Col xs={12} md={6} xl={3} key={id}>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
        <CardImg
          top
          width="100%"
          src={image}
          alt={name + " image"}
          className="dogImg"
        />
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
              <FavoriteActions
                buttonLoading={buttonLoading}
                toggle={toggle}
                id={id}
                getStatus={getStatus}
              />
            </Col>
            <Col md={{ size: 3, offset: 4 }}>
              <CardLink>
                <Link to={`/detail/${id}`}>Detay'a Git</Link>
              </CardLink>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

Dog.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  toggle: PropTypes.bool,
  getStatus: PropTypes.bool,
  image: PropTypes.string,
  buttonLoading: PropTypes.bool,
};

Dog.getDefaultProps = {
  name: "Dog Name",
  toggle: false,
  getStatus: false,
  image:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amerikickkansas.com%2Fhome%2Fdefault-image%2F&psig=AOvVaw3W1r7kgbx5cygb7_97hhWl&ust=1589154523603000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiAnYn8p-kCFQAAAAAdAAAAABAD",
  buttonLoading: false,
};

export default Dog;
