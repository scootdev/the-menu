import React from 'react';
import './MenuItem.css';

function MenuItem({ item, onSelectItem, type }) {
    return (
      <div className="menu-item">
        <div className="item-details">
          <h4>{item.name}</h4>
          <p>${item.price.toFixed(2)}</p>
        </div>
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
