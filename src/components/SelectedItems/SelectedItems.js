import React from 'react';
import './SelectedItems.css';

function SelectedItems({ items, totalCost }) {
    // Check if there are any selected items
    if (items.length === 0) {
        return null; // Don't render anything if no items are selected
    }

    return (
        <aside className='selected-items'>
            <h3>Your Order</h3>
            <hr></hr>
            {items.map((item) => (
                <p key={item.name}>{item.name} - ${item.price}</p>
            ))}
            <hr></hr>
            <p><b>Total Cost:</b> ${totalCost.toFixed(2)}</p>
        </aside>
    );
}

export default SelectedItems;
