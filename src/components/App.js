import "./App.css";
import FirstComponent from "./FirstComponent";
import NepseStocks from "./NepseStocks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SecondComponent from "./SecondComponent";
import CashFlowCalculator from "./CashFlowCalculator";
import { useState } from "react";
import BillingList from "./BillingLists";
import { STOCKS } from "./constants";

function App() {
  const [whatToShow, setWhatToShow] = useState("");
  const [stocks, setStocks] = useState(STOCKS);

  // const BUTTON = [
  //   {
  //     title: "First Component",
  //     id: "firstcomponent-btn",
  //     field: "firstcomponent",
  //   },
  //   {
  //     title: "Nepse Stocks",
  //     id: "nepsestocks-btn",
  //     field: "nepsestocks",
  //   },
  //   {
  //     title: "Cash Flow Calculator",
  //     id: "cashflowcalculator-btn",
  //     field: "cashflowcalculator",
  //   },
  //   {
  //     title: "Billing List",
  //     id: "billinglist-btn",
  //     field: "billinglist",
  //   },
  // ];

  return (
    <div className="App">
      <header className="App-header">
        {/* <p>Designed by Srijan</p> */}

        <input
          id="whatToShow"
          name="whatToShow"
          value={whatToShow}
          onChange={(e) => setWhatToShow(e.target.value)}
        />

        {/* {BUTTON.map((a) => (
          <button id={a.id} key={a.id} onclick={(e) => setWhatToShow(a.field)}>
            {a.title}
          </button>
        ))} */}
        {/* <button onClick={(e) => setWhatToShow("cashFlow")}>
          Cash Flow Calculator
          </button>          
          <button onClick={(e) => setWhatToShow("nepseStocks")}>
          Nepse Stock
          </button>          
          <button onClick={(e) => setWhatToShow("billinglist")}>
          Billing List
        </button> */}

        {/* <button onClick={(e) => setWhatToShow("first")}>First Component</button> */}
        {whatToShow === "first" && (
          <FirstComponent
            name="Test"
            courseName={"MERN"}
            age={23}
            isStudent={true}
            //objects
            details={{ address: "Kathmandu", bloodGroup: "O +" }}
            //array
            subjects={["mongodb", "ExpressJS", "ReactJS", "NodeJS"]}
            square={(x) => x * x}
          />
        )}
        {whatToShow === "cashFlow" && <CashFlowCalculator />}
        {whatToShow === "nepseStocks" && (
          <NepseStocks
            setWhatToShow={setWhatToShow}
            // BUTTON={BUTTON}
            setStocks={setStocks}
            stocks={stocks}
          />
        )}

        {whatToShow === "billinglist" && <BillingList stocks={stocks} />}

        <ToastContainer />
        {/* <SecondComponent /> */}
        {/* <CashFlowCalculator />
        <NepseStocks name="STOCKS" /> */}
      </header>
    </div>
  );
}

export default App;
