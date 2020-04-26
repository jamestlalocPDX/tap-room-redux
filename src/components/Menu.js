import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function Menu(props){
  return (
    <React.Fragment>
      <hr/>
      {props.menu.map((keg) =>
      <Keg 
        whenKegClicked={props.onKegSelection}
        name={keg.name}
        brand={keg.brand}
        description={keg.description}
        price={keg.price}
        abv={keg.abv}
        id={keg.id}
        key={keg.id} />)}
    </React.Fragment>
  );
}

Menu.PropTypes = {
  menu: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default Menu;