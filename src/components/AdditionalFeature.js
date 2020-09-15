import React from 'react';
//added the addItem action creator to add/buy extra items
const AdditionalFeature = props => {
  return (
    <li>
      <button className="button"
      onClick={() => {
        props.addItem(props.feature)
      }}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
