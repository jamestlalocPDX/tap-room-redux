import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditNewKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, description: event.target.description.value, abv: event.target.abv.value, price: event.target.price.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditNewKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;