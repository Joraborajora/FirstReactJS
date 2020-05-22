import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// function Title(props) {
//   console.log(props);
//   return (
//     <div>
//       <p>Are you strong</p>
//       <p>{props.title}</p>
//       <p>{props.hey}</p>
//     </div>
//   );
// }

// function Main() {
//   return (
//     <div>
//       <p> Are you good </p>
//       <Title title="are you beautiful" hey="stay at home" />
//     </div>
//   );
// }

const movie = {
  title: "Moonlight",
  vote: 9.2,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SL1178_.jpg",
  overwiev: "Loremipsumlalala "
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
  // console.log ("Image props", props);
  return <img src={props.src} alt={props.alt} />;

}

// function MovieItem(props) {
//   console.log("MovieItem props", props);
//   const { data: { title,vote,image} }= props;
//   return (
//     <div>
//       <Image src={image} alt={title}/>
//       <p>{title}</p>
//       <p>{vote}</p>
//     </div>
//   );
// }

class MovieItem extends React.Component {

  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toddleOverwiev = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, vote, image, overwiev }
    } = this.props;
    console.log(this.state);
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toddleOverwiev}>
            {this.state.show ? "HIDE" : "SHOW"}
          </button>

          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : "zero"}
          >
            LIKE
          </button>
        </div>
        {this.state.show ? <p>{overwiev}</p> : null}

  render() {
    const {
      data: { title, vote, image }
    } = this.props;
    console.log(this);
    return (
      <div>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote}</p>

      </div>
    );
  }
}

function App() {
  return (
    <div>
      Hello world!
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
