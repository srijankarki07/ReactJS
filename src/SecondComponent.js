import { useEffect, useState } from "react";
import { STOCKS } from "./constants";

import { toast } from "react-toastify";
import NepseStocks from "./NepseStocks";

const SecondComponent = () => {
  const [stocks, setStocks] = useState(STOCKS);
  const [alertState, setAlertState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [selectedStock, setSelectedStock] = useState({});
  const [searchWord, setSearchWord] = useState("");

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [securityName, setSecurityName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [securityId, setSecurityId] = useState(null);

  // console.log(STOCKS);

  useEffect(
    () =>
      setStocks(
        STOCKS.filter((s) =>
          [s.securityName, s.securityId, s.symbol].some((x) =>
            x.toLowerCase().includes(searchWord.toLowerCase())
          )
        )
      ),
    [searchWord]
  );

  const handleAddUpdate = (e) => {
    if (!editState) {
      setStocks([{ securityName, symbol, securityId }, ...stocks]);
      toast.success("Stock added");
    } else {
      setStocks(
        stocks.map((s) =>
          selectedStock.securityId === s.securityId
            ? { ...s, securityName, securityId, symbol }
            : s
        )
      );
      toast.success("Stock Updated");
    }
  };

  return (
    <div>
      <h2>Todays Stocks:</h2>
      <div>
        <input
          placeholder="SecurityName"
          value={securityName}
          onChange={(e) => setSecurityName(e.target.value)}
        />
        <input
          placeholder="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <input
          placeholder="securityId"
          value={securityId}
          onChange={(e) => setSecurityId(e.target.value)}
        />

        <button onClick={handleAddUpdate}>
          {editState ? "Update" : "Add"} Stock
        </button>
        {editState && (
          <button onClick={(e) => setEditState(false)}>Cancel</button>
        )}
      </div>
      <div>
        <input
          placeholder="Search stock"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
      <div className="stocks-container">
        <div className="stocks-item heading">
          <span className="sn">SN</span>
          <span className="sname">Security Name</span>
          <span className="symbol">Sym</span>
          <span className="sid"> Id</span>
        </div>
        {stocks.map((s, index) => (
          <NepseStocks
            key={s.securityId}
            {...{
              s,
              index,
              alertState,
              setAlertState,
              setStocks,
              setSymbol,
              setSelectedIndex,
              setEditState,
              stocks,
              selectedIndex,
              setSelectedStock,
              setSecurityId,
              setSecurityName,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SecondComponent;
