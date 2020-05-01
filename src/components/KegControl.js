import React from 'react';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Menu from './Menu';
import { connect } from 'react-redux';

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
    const selectedKeg = this.state.masterMenu.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterMenu = this.state.masterMenu
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        masterMenu: editedMasterMenu,
        editing: false,
        selectedKeg: null
      });
  }

  handleDeletingKeg = (id) => {
    const newMasterMenu = this.state.masterMenu.filter(keg => keg.id !== id);
    this.setState({
      masterMenu: newMasterMenu,
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
        menu = {this.state.masterMenu} 
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

KegControl = connect()(KegControl);

export default KegControl;