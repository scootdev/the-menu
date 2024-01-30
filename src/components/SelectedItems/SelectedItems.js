import React from 'react';

function SelectedItems({ items, totalCost }) {
    return (
      <aside>
        <h3>Selected Items</h3>
        {items.map((item) => (
          <p key={item.name}>{item.name} - ${item.price}</p>
        ))}
        <p>Total Cost: ${totalCost}</p>
      </aside>
    );
  }
  
  export default SelectedItems;
  