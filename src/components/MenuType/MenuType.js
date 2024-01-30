import React from 'react';
import './MenuType.css';
import MenuItem from '../MenuItem/MenuItem';

function MenuType({ type, items, onSelectItem }) {
    return (
      <section>
        <h3>{type.charAt(0).toUpperCase() + type.slice(1)}s</h3>
        <div className="menu-items-container">
          {items.map((item) => (
            <MenuItem key={item.name} item={item} onSelectItem={onSelectItem} type={type} />
          ))}
        </div>
      </section>
    );
}

export default MenuType;
