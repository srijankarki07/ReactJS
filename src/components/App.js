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
import { Route, Routes, NavLink } from "react-router-dom";
import { RiStockFill } from "react-icons/ri";
import { IoCashOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { MdLooksOne } from "react-icons/md";
import SampleProvider from "../contexts/SampleContext";
import FormikComponent from "./FormikComponent";
import Phone from "./Phone";
import { CiMenuKebab, CiMobile3 } from "react-icons/ci";
import { SiVitest } from "react-icons/si";

function App() {
  const [stocks, setStocks] = useState(STOCKS);
  const [isOpen, setIsOpen] = useState(false);

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
      path: "/",
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

    {
      title: "Formik Component",
      path: "/formik",
      key: "formik",
      icon: <SiVitest />,
      component: <FormikComponent setStocks={setStocks} stocks={stocks} />,
    },

    {
      title: "Phone",
      key: "phone",
      path: "/phone",
      icon: <CiMobile3 />,
      component: <Phone />,
    },
  ];

  return (
    <div className="App">
      <div className="body">
        <div id="sidebar">
          <div>
            {BUTTONS.map((a) => (
              <NavLink to={a.path} key={a.key} className="sidebar-option">
                {a.title}
                {a.icon}
              </NavLink>
            ))}
          </div>
          {/* <div>
            <button onClick={() => setIsOpen(!isOpen)}>
              <CiMenuKebab />
            </button>
            {isOpen && (
            )}
          </div> */}
        </div>
        <div className="main-container">
          <SampleProvider>
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
          </SampleProvider>
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
