import "../styles/Main.scss";

import { CreateKeepButton } from "../components/Main/CreateKeepButton";
import { useState } from "react";
import { CreateKeepModal } from "../components/Modals/CreateKeepModal";
import { useSelector } from "react-redux";
import { KeepItem } from "../components/Keep/KeepItem";
import Scrollbars from "react-custom-scrollbars";

type Keep = {
  id: string;
  title: string;
  todos: [];
};
interface Keeps {
  keeps: { keeps: Keep[] };
}

export const Main = () => {
  const [isModal, setIsModal] = useState(false);

  const keeps = useSelector((state: Keeps) => state.keeps.keeps);

  return (
    <div className="page main">
      <CreateKeepButton openModal={() => setIsModal(true)} />
      <div className="main__content">
        <div className="main__keeps-container">
          {keeps.length ? (
            <Scrollbars hideTracksWhenNotNeeded>
              <div className="main__keeps">
                {keeps.map((keep) => (
                  <KeepItem
                    key={keep.id}
                    keep={keep}
                    isEdit={false}
                    deleteHandler={() => {}}
                    onClick={() => {}}
                  />
                ))}
              </div>
            </Scrollbars>
          ) : (
            <h3 className="main__keeps-placeholder">There's nothing here!</h3>
          )}
        </div>
      </div>

      {isModal ? (
        <CreateKeepModal closeModal={() => setIsModal(false)} />
      ) : null}
    </div>
  );
};
