import React from 'react';

//added removeItem action to remove items on click
const AddedFeature = props => {
  return (
    <li>
      <button className="button"
      onClick={() => {
        props.removeItem(props.feature)
      }}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
