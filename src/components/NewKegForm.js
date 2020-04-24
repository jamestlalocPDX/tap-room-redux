import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types"

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, description: event.target.description.value, abv: event.target.abv.value, price: event.target.price.value, id: v4()});
  }
  
  NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
  };

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Keg Name" />
        <input
          type="text"
          name="brand"
          placeholder="Brand Name" />
        <textarea
          name="description"
          placeholder="Describe your keg." />
        <input
          type="text"
          name="abv"
          placeholder="ABV" />
        <input
          type="text"
          name="price"
          placeholder="Price" />
        <button type="submit">Add Keg!</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;