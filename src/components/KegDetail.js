import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
      <h3>{keg.brand} - {keg.name}</h3>
      <p><em>{keg.description}</em></p>
      <p><em>{keg.abv}</em></p>
      <p><em>{keg.price}</em></p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;