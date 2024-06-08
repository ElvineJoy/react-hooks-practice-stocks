import React from "react";
import Stock from "./Stock";
import SearchBar from "./SearchBar";

function StockContainer({stocks, onAddStock}) {
  

  const stockItem = stocks.map(stock => (
    <Stock 
      key = {stock.id}
      stock ={stock}
      onStockClick={onAddStock}
    />
  ));



  return (
    <div>
      <h2>Stocks</h2>
      <ul>{stockItem}</ul>
    </div>
  );
}

export default StockContainer;
