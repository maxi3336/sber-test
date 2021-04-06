import "../styles/Main.scss";

import { CreateKeepButton } from "../components/Main/CreateKeepButton";

export const Main = () => {
  return (
    <div className="page main">
      <CreateKeepButton />
      <div className="main__content"></div>
    </div>
  );
};
