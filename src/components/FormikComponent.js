import { useReducer, useState } from "react";
import "./App.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { stockSchema } from "./stockSchema";
const FormikComponent = ({ setStocks, stocks }) => {
  const [securityName, setSecurityName] = useState("");
  const [securityId, setSecurityId] = useState("");
  const [symbol, setSymbol] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedStocks, setSelectedStocks] = useState("");
  const [confimDelete, setConfirmDelete] = useState(false);
  const [searchStock, setSearchStock] = useState(" ");

  const formik = useFormik({
    initialValues: {
      securityName: "",
      symbol: "",
      securityId: "",
    },
    validationSchema: stockSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values));
    },
  });

  const [foundStocks, setFoundStocks] = useReducer(stocks);

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

  console.log(formik, "formik");
  return (
    <div id="stocks">
      <h1> List of Nepse Stocks</h1>
      <h4>Total Stocks :{stocks.length}</h4>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <form>
        <label htmlFor="securityId">Security Id</label>

        <input
          className="inputbox"
          id="securityId"
          name="securityId"
          type="number"
          placeholder="Enter Security Id"
          onChange={formik.handleChange}
          value={formik.values.securityId}
          onBlur={formik.handleBlur}
        />
        {formik.touched.securityId && formik.errors.securityId && (
          <span>{formik.errors.securityId}</span>
        )}
        <label htmlFor="securityName">Security Name</label>

        <input
          id="securityName"
          name="securityName"
          type="text"
          className="inputbox"
          placeholder="Enter Security Name"
          onChange={formik.handleChange}
          value={formik.values.securityName}
          onBlur={formik.handleBlur}
        />
        {formik.touched.securityName && formik.errors.securityName && (
          <span>{formik.errors.securityName}</span>
        )}

        <label htmlFor="symbol">Symbol</label>
        <input
          id="symbol"
          name="symbol"
          type="text"
          className="inputbox"
          placeholder="Enter Symbol"
          maxLength="3"
          onChange={formik.handleChange}
          value={formik.values.symbol}
          onBlur={formik.handleBlur}
        />
        {formik.touched.symbol && formik.errors.symbol && (
          <span>{formik.errors.symbol}</span>
        )}

        <button
          onClick={handleAddUpdateStocks}
          id="submit"
          className="inputbox"
        >
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
      </form>
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
export default FormikComponent;
