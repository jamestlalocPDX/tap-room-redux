import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";


function Menu(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.menu).map((keg) => {
        return <Keg 
        whenKegClicked={props.onKegSelection}
        name={keg.name}
        brand={keg.brand}
        description={keg.description}
        abv={keg.abv}
        price={keg.price}
        pints={keg.pints}
        id={keg.id}
        key={keg.id} />
      })}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default Menu;