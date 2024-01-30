import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

function MenuType({ items, onSelectItem }) {
    return (
      <section>
        <h3>{/* Type Name */}</h3>
        {items.map((item) => (
          <MenuItem key={item.name} item={item} onSelectItem={onSelectItem} />
        ))}
      </section>
    );
  }
  
  export default MenuType;
  