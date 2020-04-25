import React from 'react';
import NewKegForm from './NewKegForm';
import Menu from './Menu';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMenu: [],
      selectedKeg: null
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
  
  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
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
    
    if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
        buttonText = "Return to Menu";
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToMenu} />
        buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <Menu Menu = {this.state.masterMenu} onKegSelection = {this.handleChangingSelectedKeg} />;
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