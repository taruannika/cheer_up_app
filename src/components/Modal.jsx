import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Modal = ({ children }) => {
  const { modalRef } = useContext(AppContext);
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
