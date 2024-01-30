import React from 'react';

function MenuItem({ item, onSelectItem }) {
    return (
      <div onClick={() => onSelectItem(item)}>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
        {/* Add radio button or other selection mechanism */}
      </div>
    );
  }
  
  export default MenuItem;
  