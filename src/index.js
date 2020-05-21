import React from "react";
import ReactDOM from "react-dom";

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
