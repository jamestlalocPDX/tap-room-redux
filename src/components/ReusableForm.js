import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;