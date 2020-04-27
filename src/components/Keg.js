import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h2>{props.brand} <em>presents:</em></h2>
      <h3>{props.name}</h3>
      <p><em>{props.description}</em></p>
      <p><strong>abv</strong>: <em>{props.abv}</em></p>
      <p><strong>Price</strong>: <em>{props.price}</em></p>
      <p><strong>Pints</strong>: <em>{props.pints}</em></p>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <button>Choose</button>
      </div>
      <br/>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;