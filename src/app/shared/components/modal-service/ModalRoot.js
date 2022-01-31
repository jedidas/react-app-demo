import { useCallback, useEffect, useState } from "react";
import reactDom from "react-dom";
import ModalService from "./ModalService";
import "./modal-service.scss";

export default function ModalRoot() {
  const [modal, setModal] = useState({});

  const [showAnim, setshowAnim] = useState("modal fade");

  const ModalComponent = modal.component ? modal.component : null;
  const modalRoot = document.getElementById("modal-root");
  const modalBackdrop = document.getElementById("modal-backdrop");

  const addModalBodyClass = useCallback(() => {
    modalRoot.closest("body").classList.add("modal-open");
    modalBackdrop.style.cssText = "display:block";
    setTimeout(() => {
      modalBackdrop.classList.add("show");
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeModalBodyClass = useCallback(function () {
    modalRoot.closest("body").classList.remove("modal-open");
    modalBackdrop.classList.remove("show");
    setTimeout(() => {
      modalBackdrop.style.cssText = "display:none";
    }, 600);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    ModalService.on("open", ({ component, props, title, size }) => {
      setModal({
        component,
        props,
        title,
        size,
        close: (value) => {
          
          removeModalBodyClass();
          setTimeout(() => {
            setshowAnim("modal fade");
          }, 200);
          setTimeout(() => {
            setModal({});
          }, 400);
        },
      });
    });
  }, [removeModalBodyClass]);

  if (!Boolean(modal.component)) {
    return null;
  }

  addModalBodyClass();

  setTimeout(() => {
    setshowAnim("modal fade show");
  }, 750);

  return reactDom.createPortal(
    <div className={showAnim} aria-hidden="true" style={{ display: "block" }}>
      <div
        className={
          modal.size ? `modal-dialog modal-${modal.size}` : "modal-dialog"
        }
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modal.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={modal.close}
            ></button>
          </div>
          <div className="modal-body">
            {ModalComponent && (
              <ModalComponent {...modal.props} close={modal.close} />
            )}
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
