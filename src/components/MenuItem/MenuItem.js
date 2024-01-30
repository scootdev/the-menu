import React from 'react';

function MenuItem({ item, onSelectItem, type }) {
    return (
      <div className="menu-item">
        <label htmlFor={`${type}-${item.name}`}>
          <h4>{item.name} - ${item.price}</h4>
        </label>
        <input 
          type="radio" 
          name={type} 
          id={`${type}-${item.name}`} 
          onChange={() => onSelectItem(item)}
        />
      </div>
    );
}


export default MenuItem;
