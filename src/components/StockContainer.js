import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer() {
  const[stocks, setStocks] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(stocks => {{
      setStocks(stocks)
      console.log(stocks)
    }})
  }, []);

  const stockItem = stocks.map(stock => (
    <Stock 
      key = {stock.id}
      name ={stock.name}
      ticker = {stock.ticker}
      price = {stock.price}
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
