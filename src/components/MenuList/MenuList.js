import React from 'react';
import './MenuList.css';
import MenuType from '../MenuType/MenuType';

function MenuList({ menu, onSelectItem }) {
    // Grouping menu items by type
    const menuTypes = menu.reduce((acc, item) => {
      acc[item.type] = acc[item.type] || [];
      acc[item.type].push(item);
      return acc;
    }, {});
  
    return (
      <div class='menu-list'>
        {Object.keys(menuTypes).map((type) => (
          <MenuType key={type} type={type} items={menuTypes[type]} onSelectItem={onSelectItem} />
        ))}
      </div>
    );
  }
  
  export default MenuList;
  