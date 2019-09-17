import React from 'react';
import PropTypes from "prop-types";

function Food({name, rating, picture}){
    return (
      <div>
        <h2>I love {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt=""/>

      </div>
    

    );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
const foodILike = [
  {
    id:1,
    name: "Lamb",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/4/5/0/BX1601_Rosemary-Rack-of-Lamb_s4x3.jpg.rend.hgtvcom.616.462.suffix/1554488452881.jpeg"
    ,rating: 5
  },{
    id:2,
    name: "Pork",
    image:
      "https://www.seriouseats.com/recipes/images/2016/02/20160208-sous-vide-pork-chop-guide-food-lab-37-1500x1125.jpg"
    ,rating: 5
  },{
    id:3,
    name: "Beef",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/4/1/BX1501_Roast-Filet-of-Beef_s4x3.jpg.rend.hgtvcom.826.620.suffix/1538677423309.jpeg"
    ,rating: 5
  },{
    id:4,
    name: "Chicken",
    image:
        "https://i1.wp.com/iheartumami.com/wp-content/uploads/2019/07/Air-Fryer-Whole-Chicken-I-Heart-Umami.jpg?w=795&ssl=1"
    ,rating: 5
  },
];


function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}
// Root Component
function App() {
  return (
    <div className="App">
      {foodILike.map(renderFood)}
    </div>

  );
}

export default App;
