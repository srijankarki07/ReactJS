import React, { useContext, useRef, useState } from "react";
// import { STOCKS } from "./constants";
import Select from "react-select";
import { SampleContext } from "./App";

const BillingList = ({ stocks }) => {
  const [entries, setEntries] = useState([]);
  const [particular, setParticular] = useState();
  const [rate, setRate] = useState();
  const [quantity, setQuantity] = useState(10);
  const rateRef = useRef(null);
  const quantityRef = useRef(null);
  const addRef = useRef(null);

  const testTheProvider = useContext(SampleContext);
  console.log(testTheProvider, "check");

  const handlePressEnterAtQuantity = (e) => {
    if (e.code === "Enter") {
      setEntries([
        ...entries,
        {
          id: entries.length + 1,
          particular: particular.value,
          rate,
          quantity,
        },
      ]);
      quantityRef.current?.focus();
    }
  };
  const handleStockChange = (selectedOption) => setParticular(selectedOption);

  console.log(entries, particular);
  return (
    <div>
      <h1> Billing List</h1>
      <div className="bill-input-container">
        <span></span>
        <Select
          className="parti"
          options={stocks.map((s) => ({
            label: `${s.securityName} ${s.symbol} ${s.securityId}`,
            value: s.securityName,
          }))}
          value={particular}
          onChange={handleStockChange}
          isClearable={true}
          // isMulti={true}
          // isDisabled={true}

          // getOptionLabel={(option) => option.securityName}
          // getOptionValue={(option) => option.symbol}
        >
          {/* {stocks.map((s) => (
            <option
              key={s.securityId}
              value={`${s.securityName}$ ${"["}${s.symbol}${"]"}`}
            >
              {s.securityName} {" [ "}
              {s.symbol}
              {" ] "} {" ( "}
              {s.securityId} {" ) "}
            </option>
          ))} */}
        </Select>
        <input
          className="enterate"
          id="rate"
          name="rate"
          placeholder="Enter rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          ref={rateRef}
          onKeyUp={(e) =>
            e.code === "Enter" ? quantityRef.current?.focus() : void 0
          }
        />
        <input
          className="quant"
          id="quantity"
          name="quantity"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          ref={quantityRef}
          onKeyUp={handlePressEnterAtQuantity}
        />
        <button
          ref={addRef}
          className="add"
          id="add"
          onClick={(e) =>
            setEntries([
              ...entries,
              {
                id: entries.length + 1,
                particular: particular.value,
                rate,
                quantity,
              },
            ])
          }
        >
          Add Entry
        </button>
      </div>
      <div className="bill-container">
        <span className="sn">SN</span>
        <span className="par">Particulars</span>
        <span className="rate">Rate</span>
        <span className="qty">Qty</span>
        <span className="total">Total</span>
      </div>

      {entries.map((a, index) => (
        <div className="entry-item" key={a.id}>
          <span className="index">{index + 1}</span>
          <span className="part">{a.particular}</span>
          <span className="rat">{a.rate}</span>
          <span className="quty">{a.quantity}</span>
          <span className="tot">{a.rate * a.quantity}</span>
        </div>
      ))}
      <div>
        <p className="Gtot">
          Grand Total : {entries.reduce((a, v) => a + v.rate * v.quantity, 0)}
        </p>
      </div>
    </div>
  );
};
export default BillingList;
