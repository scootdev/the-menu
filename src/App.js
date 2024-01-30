import React, { useState, useEffect } from 'react';
import './App.css';
import menuData from './data/menu.json';
import Header from './components/Header/Header';
import MenuList from './components/MenuList/MenuList';
import SelectedItems from './components/SelectedItems/SelectedItems';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle item selection
  const handleSelectItem = (item) => {
    setSelectedItems(prevSelectedItems => ({
      ...prevSelectedItems,
      [item.type]: item
    }));
  };

  // Calculate total cost
  const calculateTotal = () => {
    return Object.values(selectedItems).reduce((total, item) => total + item.price, 0);
  };

  useEffect(() => {
    // Any initial setup if needed
  }, []);

  return (
    <div className="App">
      <Header restaurantInfo={menuData.restaurant} />
      <div className="Menu">
        <h2>Menu</h2>
        <MenuList menu={menuData.menu} onSelectItem={handleSelectItem} />
      </div>
      <SelectedItems items={Object.values(selectedItems)} totalCost={calculateTotal()} />
    </div>
  );
}

export default App;
