import React from 'react';
import { connect } from 'react-redux';
import { removeItem} from './actions/RemoveItem';
import { addItem } from './actions/AddItem'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//renders all components in view
const App = props => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeItem={props.removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addItem={props.addItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//takes properties from state tree to map to the props of the components
const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

//passed mapStateToProps into connect function
//tells which state to pass to components
export default connect (
  mapStateToProps,
  { addItem, removeItem } 
)(App);
