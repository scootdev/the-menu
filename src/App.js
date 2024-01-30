import React, { useState, useEffect } from 'react';
import menuData from './data/menu.json';
import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';
import SelectedItems from './components/SelectedItems/SelectedItems';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle item selection
  const handleSelectItem = (item) => {
    // Logic to add/remove item from selectedItems
  };

  // Calculate total cost
  const calculateTotal = () => {
    // Logic to calculate total cost of selectedItems
  };

  useEffect(() => {
    // Any initial setup if needed
  }, []);

  return (
    <div className="App">
      <Header restaurantInfo={menuData.restaurant} />
      <h2>Menu</h2>
      <MenuList menu={menuData.menu} onSelectItem={handleSelectItem} />
      <SelectedItems items={selectedItems} totalCost={calculateTotal()} />
    </div>
  );
}

export default App;
