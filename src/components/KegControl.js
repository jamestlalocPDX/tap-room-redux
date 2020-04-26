import React from 'react';
import KegDetail from './KegDetail';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Menu from './Menu';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMenu: [],
      selectedKeg: null,
      editing: false
    };
  }
  
  handleAddingNewKegToMenu = (newKeg) => {
    const newMasterMenu = this.state.masterMenu.concat(newKeg);
    this.setState({masterMenu: newMasterMenu});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterMenu.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterMenu = this.state.masterMenu
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        masterMenu: editedMasterMenu,
        editing: false,
        selectedTicket: null
      });
  }

  handleDeletingKeg = (id) => {
    const newMasterMenu = this.state.masterMenu.filter(keg => keg.id !== id);
    this.setState({
      masterMenu: newMasterMenu,
      selectedKeg: null
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
      onEditKeg = {this.handleEditingKegInList} />;
      buttonText = "Return to Menu";
    } else if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail 
        keg = {this.state.selectedKeg} 
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

export default KegControl;