import "./App.css";
import FirstComponent from "./FirstComponent";
import NepseStocks from "./NepseStocks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import SecondComponent from "./SecondComponent";
import CashFlowCalculator from "./CashFlowCalculator";
import { createContext, useState } from "react";
import BillingList from "./BillingLists";
import { STOCKS } from "./constants";
import { Route, Routes, NavLink } from "react-router-dom";
import { RiStockFill } from "react-icons/ri";
import { IoCashOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { MdLooksOne } from "react-icons/md";

export const SampleContext = createContext();

function App() {
  const [stocks, setStocks] = useState(STOCKS);

  const BUTTONS = [
    {
      title: "First Component",
      key: "first",
      path: "/first",
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
      icon: <MdLooksOne />,
    },
    {
      title: "Nepse Stocks",
      key: "nepseStocks",
      path: "/nepseStocks",
      component: <NepseStocks setStocks={setStocks} stocks={stocks} />,
      icon: <RiStockFill />,
    },
    {
      title: "Cash Flow Calc",
      path: "/cashFlow",
      key: "cashFlow",
      component: <CashFlowCalculator />,
      icon: <IoCashOutline />,
    },
    {
      title: "Billing List",
      path: "/billinglist",
      key: "billinglist",
      component: <BillingList stocks={stocks} />,
      icon: <RiBillLine />,
    },
  ];

  return (
    <div className="App">
      {/* <input
        id="whatToShow"
        name="whatToShow"
        value={whatToShow}
        onChange={(e) => setWhatToShow(e.target.value)}
      /> */}

      {/* <span>
        {BUTTONS.map((a) => (
          <button
            key={a.key}
            onClick={(e) => setWhatToShow(a.key)}
            className={a.key === whatToShow ? "selected" : ""}
          >
            {a.title}
          </button>
        ))}
      </span> */}
      <div className="body">
        <div id="sidebar">
          {BUTTONS.map((a) => (
            <NavLink to={a.path} key={a.key} className="sidebar-option">
              {a.title}
            </NavLink>
          ))}
        </div>
        <div className="main-container">
          <SampleContext.Provider value={{ test: "Sample text" }}>
            <Routes>
              {BUTTONS.map((a) => (
                <Route path={a.path} key={a.key} element={a.component} />
              ))}
              <Route
                path="*"
                element={
                  <div>
                    <h1>Page Not Found</h1>
                  </div>
                }
              />
            </Routes>
          </SampleContext.Provider>
        </div>
      </div>
      <header className="App-header">
        <p>Designed by Srijan</p>
        <ToastContainer />
      </header>
    </div>
  );
}
export default App;
