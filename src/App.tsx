import "./styles/App.scss";

import { Navigation } from "./components/Navigation/Navigation";
import { Routes } from "./components/Routes/Routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setKeeps } from "./redux/reducers/keepsReducer";
import { Keep } from "./utils/types";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.keeps) {
      localStorage.setItem("keeps", JSON.stringify([]));
    } else {
      let keepsStr: string = localStorage.getItem("keeps") ?? "";
      const keeps: Keep[] = JSON.parse(keepsStr) ?? [];
      const state = { keeps, isEdit: false, editedKeep: null };

      dispatch(setKeeps(state));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Navigation />
      <Routes />
    </div>
  );
};

export default App;
