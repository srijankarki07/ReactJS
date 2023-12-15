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
import { Route, Routes } from "react-router-dom";

function App() {
  const [whatToShow, setWhatToShow] = useState("");
  const [stocks, setStocks] = useState(STOCKS);

  const BUTTONS = [
    {
      title: "First Component",
      key: "first",
      component: (
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
      ),
    },
    {
      title: "Nepse Stocks",
      key: "nepseStocks",
      component: <NepseStocks setStocks={setStocks} stocks={stocks} />,
    },
    {
      title: "Cash Flow Calculator",
      key: "cashFlow",
      component: <CashFlowCalculator />,
    },
    {
      title: "Billing List",
      key: "billinglist",
      component: <BillingList stocks={stocks} />,
    },
  ];

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
        <span>
          {BUTTONS.map((a) => (
            <button
              key={a.key}
              onclick={(e) => setWhatToShow(a.key)}
              className={a.key === whatToShow ? "selected" : ""}
            >
              {a.title}
            </button>
          ))}
        </span>
        {BUTTONS.map((v) => v.key === whatToShow && v.component)}
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
        {/* {whatToShow === "first" && (
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
            BUTTONS={BUTTONS}
            setStocks={setStocks}
            stocks={stocks}
          />
        )}

        {whatToShow === "billinglist" && <BillingList stocks={stocks} />} */}

        <ToastContainer />
        {/* <SecondComponent /> */}
        {/* <CashFlowCalculator />
        <NepseStocks name="STOCKS" /> */}
      </header>
    </div>
  );
}

export default App;
