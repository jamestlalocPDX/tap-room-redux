import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.brand}</h3>
      <p><em>{props.description}</em></p>
      <p><em>{props.abv}</em></p>
      <p><em>{props.price}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Keg;