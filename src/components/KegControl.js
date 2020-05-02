import React from 'react';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Menu from './Menu';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }
  
  handleAddingNewKegToMenu = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, description, abv, price, pints} = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      description: description,
      abv: abv,
      price: price,
      pints: pints,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterMenu[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, description, abv, price, pints} = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      id: id,
      name: name,
      brand: brand,
      description: description,
      abv: abv,
      price: price,
      pints: pints,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({
      selectedKeg: null
    });
  }

  handleTappingKeg = (id) => {
    const kegToTap = this.state.masterMenu.filter(keg => keg.id === id)[0];
    const tappingKeg = kegToTap.pints - 1;
    const tappedKeg = {...kegToTap, pints: tappingKeg};
    const kegMenu = this.state.masterMenu.filter(keg => keg.id != id);
    this.setState({
      masterMenu: [...kegMenu, tappedKeg],
      selectedKeg: tappedKeg
    });
  }

  handleFillingKeg = (id) => {
    const kegToFill = this.state.masterMenu.filter(keg => keg.id === id)[0];
    const fillingKeg = kegToFill.pints + 1;
    const filledKeg = {...kegToFill, pints: fillingKeg};
    const kegMenu = this.state.masterMenu.filter(keg => keg.id != id);
    this.setState({
      masterMenu: [...kegMenu, filledKeg],
      selectedKeg: filledKeg
    });
  }
  
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm 
      keg = {this.state.selectedKeg} 
      onEditKeg = {this.handleEditingKegInList}/>;
      buttonText = "Return to Menu";
    } else if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail 
        keg = {this.state.selectedKeg}
        onClickingTap = {this.handleTappingKeg}
        onClickingFill = {this.handleFillingKeg} 
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick} />;
        buttonText = "Return to Menu";
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToMenu} />;
        buttonText = "Return to Menu";
    } else {
        currentlyVisibleState = <Menu 
        menu = {this.props.masterMenu} 
        onKegSelection = {this.handleChangingSelectedKeg} />;
        buttonText = "Add Keg!";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterMenu: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterMenu: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;