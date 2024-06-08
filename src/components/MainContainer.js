import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const[stocks, setStocks] = useState([]);
  const[filterby, setFilterBy] = useState("Tech");
  const[orderBy, setOrderBy] = useState("Alphabetically");
  const[portfolio, setPortfolio] = useState([]);

// fetching the data and dispaying it 
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(stocks => {{
      setStocks(stocks)
    }})
  }, []);

//  adding to portfolio
function handleAddToPortfolio (addedStock) {
  const portfolioStock = portfolio.find((stock) =>
    stock.id === addedStock.id
  );
  if (!portfolioStock) {
    setPortfolio([...portfolio, addedStock])
  }
};

// removing stock from portfolio
function handleRemoveFromPortfolio (removedStock) {
  setPortfolio((portfolio) => portfolio.filter(stock =>
    stock.id !== removedStock.id)
  );
};

// filtering and sorting
const sortedStocks =[...stocks].sort((stockA, stockB) => {
  if (orderBy === "Alphabetically") {
    return stockA.ticker.localeCompare(stockB.ticker);
  } else {
    return stockA.price - stockB.price;
  }
});

const filteredStocks = sortedStocks.filter(stock => stock.type === filterby)

  return (
    <div>
      <SearchBar orderBy={orderBy} onChangeOrder={setOrderBy} filterBy={filterby} onChangeFilter={setFilterBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onAddStock={handleAddToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} onRemoveStock= {handleRemoveFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
