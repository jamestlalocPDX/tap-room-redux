import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
      <h3>{keg.brand} - {keg.name}</h3>
      <p><em>{keg.description}</em></p>
      <p><em>{keg.abv}</em></p>
      <p><em>{keg.price}</em></p>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;