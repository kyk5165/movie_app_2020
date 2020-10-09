import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "콩나물국밥",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2011/12/DSC1079-300x200.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "짜장면",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2011/05/DSC1677-1-300x200.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "김치볶음밥",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2010/12/DSC_1097-2-300x200.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "만두",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2012/01/DSC_0153-300x200.jpg",
    rating: 3,
  },
  {
    id: 5,
    name: "설렁탕",
    image:
      "https://www.koreanbapsang.com/wp-content/uploads/2013/02/DSC5969-2-300x200.jpg",
    rating: 4.2,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
      cle
    </div>
  );
}

export default App;
