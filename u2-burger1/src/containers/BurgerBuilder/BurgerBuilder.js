import React, { Fragment } from "react";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      meat: 1,
      beacon: 1,
    },
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Builder</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
