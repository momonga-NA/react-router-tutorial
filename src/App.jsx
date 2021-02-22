import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./components/About";
import Friends from "./components/Friends";
import Home from "./components/Home";
import AppContext from "./components/context";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <AppContext.Provider value={count}>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>{count}</p>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/friends/:id" component={Friends} />

        <div>
          <ul>
            <li>
              <Link to="/"> Home Link</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/friends/">Friends</Link>
            </li>
            <li>
              <Link to="/friends/fennec">Friends fennec</Link>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
