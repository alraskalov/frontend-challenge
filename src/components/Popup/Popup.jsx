import { useEffect } from "react";
import './Popup.css'
const Popup = ({ isOpen, name, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="popup__container popup__container-image">
        {children}
        <button className="popup__close-btn" type="button" onClick={onClose} />
      </div>
    </div>
  );
};

export default Popup;