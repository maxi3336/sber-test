import "./styles/App.scss";

import { Navigation } from "./components/Navigation/Navigation";
import { Routes } from "./components/Routes/Routes";

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Routes />
    </div>
  );
};

export default App;
