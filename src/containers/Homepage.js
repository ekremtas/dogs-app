import React from "react";
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { listDogs } from "../redux/actions";

class Homepage extends React.Component {
  componentDidMount() {
    // localstoragedan getirme
    /*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/
    // this.setState(
    //   {
    //     loadingFavorites: true,
    //   },
    //   () => {
    //     axios
    //       .get(`${apiHost}/favorites`)
    //       .then((result) => {
    //         this.setState({
    //           favorites: result.data,
    //           loadingFavorites: false,
    //         });
    //       })
    //       .catch((err) => {
    //         console.log("Axios err", err);
    //         this.setState({
    //           loadingFavorites: false,
    //         });
    //       });
    //   }
    // );
    this.props.listDogs();
  }

  // toggle = (dogId) => {
  //   this.props.addDog(dogId);
  //   // const foundDog = this.props.favorites.find(
  //   //   (favorite) => favorite.dogId === dogId
  //   // );
  //   // this.setState(
  //   //   {
  //   //     buttonLoading: [...this.state.buttonLoading, dogId],
  //   //   },
  //   //   () => {
  //   //     if (foundDog) {
  //   //       axios
  //   //         .delete(`${apiHost}/favorites/${foundDog.id}`)
  //   //         .then((result) => {
  //   //           this.setState({
  //   //             favorites: this.props.favorites.filter(
  //   //               (dog) => dog.dogId !== dogId
  //   //             ),
  //   //             buttonLoading: [this.state.buttonloading].filter((buttonId) => {
  //   //               return buttonId !== dogId;
  //   //             }),
  //   //           });
  //   //         })
  //   //         .catch((err) => {
  //   //           console.log(err);
  //   //         });
  //   //     } else {
  //   //       window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
  //   //       axios
  //   //         .post(`${apiHost}/favorites`, {
  //   //           dogId,
  //   //         })
  //   //         .then((result) => {
  //   //           const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
  //   //           this.setState({
  //   //             favorites: [...this.props.favorites, eklenenFavori],
  //   //             buttonLoading: [this.state.buttonloading].filter((buttonId) => {
  //   //               return buttonId !== dogId;
  //   //             }),
  //   //           });
  //   //         })
  //   //         .catch((err) => {
  //   //           console.log(err);
  //   //         });
  //   //     }
  //   //   }
  //   // );
  // };

  // getStatus = (dogId) => {
  //   const foundDog = this.props.favorites.find(
  //     (favorite) => favorite.dogId === dogId
  //   );
  //   return foundDog;
  // };

  render() {
    if (this.props.loadingFavorites) {
      return (
        <div>
          <h1>Sayfa Yukleniyor.....</h1>
        </div>
      );
    }
    return (
      <Container>
        <Row xs="12">
          {dogs.map((dog) => {
            return (
              <Dog
                //buttonLoading={this.props.buttonLoading}
                // toggle={this.toggle}
                id={dog.id}
                //getStatus={this.getStatus}
                {...dog}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { loadingFavorites } = state.dogReducer;
  return {
    loadingFavorites,
  };
};

const mapDispatchToProps = {
  listDogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
