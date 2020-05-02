import React from "react";
import dogs from "../dogsdata";
import FavoriteActions from "../components/FavoriteActions";
import Dog from "../components/Dog";
import axios from "axios";
import { Container } from "reactstrap";

const apiHost = "https://5ea5689e2d86f00016b45bf7.mockapi.io";

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
      loadingFavorites: false,
      buttonLoading: false,
    };
  }
  componentDidMount() {
    // localstoragedan getirme
    /*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/

    this.setState(
      {
        loadingFavorites: true,
      },
      () => {
        axios
          .get(`${apiHost}/favorites`)
          .then((result) => {
            this.setState({
              favorites: result.data,
              loadingFavorites: false,
            });
          })
          .catch((err) => {
            console.log("Axios err", err);
            this.setState({
              loadingFavorites: false,
            });
          });
      }
    );
  }

  toggle = (dogId) => {
    const foundDog = this.state.favorites.find(
      (favorite) => favorite.dogId === dogId
    );
    this.setState(
      {
        buttonLoading: true,
      },
      () => {
        if (foundDog) {
          axios
            .delete(`${apiHost}/favorites/${foundDog.id}`)
            .then((result) => {
              this.setState({
                favorites: this.state.favorites.filter(
                  (dog) => dog.dogId !== dogId
                ),
                buttonLoading: false,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
          axios
            .post(`${apiHost}/favorites`, {
              dogId,
            })
            .then((result) => {
              const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
              this.setState({
                favorites: [...this.state.favorites, eklenenFavori],
                buttonLoading: false,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    );
  };

  getStatus = (dogId) => {
    const foundDog = this.state.favorites.find(
      (favorite) => favorite.dogId === dogId
    );
    return foundDog;
  };

  render() {
    if (this.state.loadingFavorites) {
      return (
        <div>
          <h1>Sayfa Yukleniyor.....</h1>
        </div>
      );
    }
    return (
      <Container>
        <ul>
          {dogs.map((dog) => {
            return (
              <Dog
                buttonLoading={this.state.buttonLoading}
                toggle={this.toggle}
                id={dog.id}
                getStatus={this.getStatus}
                {...dog}
              />
            );
          })}
        </ul>
      </Container>
    );
  }
}

export default Homepage;
