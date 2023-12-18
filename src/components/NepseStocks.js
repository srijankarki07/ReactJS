import { useContext, useEffect, useRef, useState } from "react";
import { STOCKS } from "./constants";
import "./App.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { SampleContext } from "./App";
const NepseStocks = ({ setStocks, stocks }) => {
  const [securityName, setSecurityName] = useState("");
  const [securityId, setSecurityId] = useState("");
  const [symbol, setSymbol] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedStocks, setSelectedStocks] = useState("");
  const [confimDelete, setConfirmDelete] = useState(false);
  const [searchStock, setSearchStock] = useState(" ");

  const testTheProvider = useContext(SampleContext);
  console.log(SampleContext, "check for Nepse Stocks");

  const [foundStocks, setFoundStocks] = useState(stocks);

  const handleAddUpdateStocks = (e) => {
    if ([securityId, securityName, symbol].some((s) => s === "")) {
      toast.warning("Input field can't be empty");
    } else {
      if (!editMode) {
        setStocks([{ securityId, securityName, symbol }, ...stocks]);
        setFoundStocks([{ securityId, securityName, symbol }, ...stocks]);
        setSecurityId();
        setSecurityName();
        setSymbol();
        toast.success("Successfully Added !");
      } else {
        setStocks(
          stocks.map((s) =>
            selectedStocks.securityId === s.securityId
              ? { ...s, securityId, securityName, symbol }
              : s
          )
        );
        toast.success("Stock Updated !");
      }
    }
  };

  const handleCancel = (e) => {
    setEditMode(false);
    setSecurityId(" ");
    setSecurityName(" ");
    setSymbol(" ");
  };

  const handleDeleteStock = (e) => {
    setStocks(stocks.filter((s) => s.securityId !== selectedStocks.securityId));
    setFoundStocks(
      stocks.filter((s) => s.securityId !== selectedStocks.securityId)
    );
    setSelectedStocks(null);
    setConfirmDelete(false);
    toast.success("Your Stock is Successfully Deleted");
  };
  useEffect(() => {
    setFoundStocks(
      stocks.filter((s) =>
        [s.securityId, s.securityName, s.symbol].some(
          (x) => x.toLowerCase().includes(searchStock.toLowerCase())
          /* s.securityName.toLowerCase().includes(searchStock.toLowerCase()) ||
          s.securityId.toLowerCase().includes(searchStock.toLowerCase()) ||
          s.symbol.toLowerCase().includes(searchStock.toLowerCase())*/
        )
      )
    );
  }, [searchStock]);

  const symbolRef = useRef(null);
  const securityIdRef = useRef(null);
  const securityNameRef = useRef(null);

  console.log(symbolRef, securityIdRef, securityNameRef, "check refs");

  const handlePressEnterAtSymbol = (e) => {
    if (e.code === "Enter") {
      handleAddUpdateStocks(e);
      symbolRef.current?.focus();
    }
  };
  return (
    <div id="stocks">
      <h1> List of Nepse Stocks</h1>
      <h4>Total Stocks :{stocks.length}</h4>
      <input
        className="inputbox"
        id="securityId"
        name="securityId"
        placeholder="Enter Security Id"
        value={securityId}
        onChange={(e) => setSecurityId(e.target.value)}
        ref={securityIdRef}
        onKeyUp={(e) =>
          e.code === "Enter" ? securityNameRef.current?.focus() : void 0
        }
      />

      <input
        id="securityName"
        name="securityName"
        className="inputbox"
        placeholder="Enter Security Name"
        value={securityName}
        onChange={(e) => setSecurityName(e.target.value)}
        // onFocus={(e) => console.log(e)}
        // onBlur={(e) => console.log(e)}
        ref={securityNameRef}
        onKeyUp={(e) =>
          e.code === "Enter" ? symbolRef.current?.focus() : void 0
        }
      />

      <input
        className="inputbox"
        id="symbol"
        name="symbol"
        placeholder="Enter Symbol"
        value={symbol}
        ref={symbolRef}
        onChange={(e) => setSymbol(e.target.value)}
        onKeyUp={handlePressEnterAtSymbol}
      />

      <button onClick={handleAddUpdateStocks} id="submit" className="inputbox">
        {editMode ? "Update" : "Add"} Stocks
      </button>

      {editMode && (
        <button onClick={handleCancel} id="cancel">
          Cancel
        </button>
      )}

      {confimDelete && (
        <div>
          <p> Do you really want to delete {selectedStocks.securityName}?</p>
          <button onClick={handleDeleteStock} id="delete">
            Delete Stock
          </button>
          <button
            onClick={(e) => {
              setSelectedStocks(null);
              setConfirmDelete(false);
            }}
            id="cancel-del"
          >
            Cancel
          </button>
        </div>
      )}

      <div>
        <input
          id="searchStock"
          name="searchStock"
          placeholder="Enter Stock to Search"
          className="inputbox"
          value={searchStock}
          onChange={(e) => setSearchStock(e.target.value)}
        />
      </div>

      <div className="stocks-container">
        <div className="stocks-item heading">
          <span className="sn">SN</span>
          <span className="sid"> Id</span>
          <span className="sname">Security Name</span>
          <span className="symbol">Sym</span>
        </div>
      </div>
      <div className="container">
        {foundStocks.map((s, index) => (
          <div key={s.securityId} className="list">
            <span className="index">{index + 1}</span>
            <span className="id">{s.securityId}</span>
            <span className="name">{s.securityName}</span>
            <span className="symbol">{s.symbol}</span>
            <FaEdit
              onClick={(e) => {
                setEditMode(true);
                setSelectedStocks(s);
                setSecurityId(s.securityId);
                setSecurityName(s.securityName);
                setSymbol(s.symbol);
              }}
            />

            <FaTrash
              onClick={(e) => {
                setSelectedStocks(s);
                setConfirmDelete(true);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
// Exporting the StockComponent as the default export
export default NepseStocks;
