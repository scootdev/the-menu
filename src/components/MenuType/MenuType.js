import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

function MenuType({ type, items, onSelectItem }) {
    return (
      <section>
        <h3>{type.charAt(0).toUpperCase() + type.slice(1)}s</h3>
        {items.map((item) => (
          <MenuItem key={item.name} item={item} onSelectItem={onSelectItem} type={type} />
        ))}
      </section>
    );
}

export default MenuType;
