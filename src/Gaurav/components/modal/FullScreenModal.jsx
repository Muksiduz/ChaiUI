import React from "react";

const FullScreenModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div style={fullStyles.modal}>
        <button style={fullStyles.closeBtn} onClick={onClose}>×</button>
        <div style={fullStyles.content}>
          {children}
        </div>
      </div>
    );
  };
  
  const fullStyles = {
    modal: {
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: '#1a1a1a', color: '#fff', zIndex: 1000,
      padding: '40px', overflowY: 'auto',
    },
    closeBtn: {
      position: 'absolute', top: '20px', right: '30px',
      fontSize: '28px', color: '#fff', background: 'none', border: 'none',
      cursor: 'pointer',
    },
    content: {
      maxWidth: '800px', margin: 'auto',
    }
  };

  export default FullScreenModal