import React from "react";
import Header from "./Header";
import MarketTable from "./MarketTable";
const MarketPage = () => {
  return (
    <div style={{ backgroundColor: "rgb(34, 40, 44)", height: "100vh" }}>
      <Header />
      <MarketTable />
    </div>
  );
};

export default MarketPage;
