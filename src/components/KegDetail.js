import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
      <h2>{keg.brand} presents:</h2>
      <h3>{keg.name}</h3>
      <p><strong>Description</strong>: <em>{keg.description}</em></p>
      <p><strong>abv</strong>: <em>{keg.abv}</em></p>
      <p><strong>Price</strong>: <em>{keg.price}</em></p>
      <p><strong>Pints</strong>: <em>{keg.pints}</em></p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> props.onClickingDelete(keg.id) }>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;