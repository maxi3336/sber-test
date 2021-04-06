import "../styles/Main.scss";

import { CreateKeepButton } from "../components/Main/CreateKeepButton";
import { useState } from "react";
import { CreateKeepModal } from "../components/Modals/CreateKeepModal";

export const Main = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="page main">
      <CreateKeepButton openModal={() => setIsModal(true)} />
      <div className="main__content"></div>
      {isModal ? (
        <CreateKeepModal closeModal={() => setIsModal(false)} />
      ) : null}
    </div>
  );
};
