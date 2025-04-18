import React from "react";

 const GlassModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div style={glassStyles.overlay}>
        <div style={glassStyles.modal}>
          {children}
          <button style={glassStyles.btn} onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  const glassStyles = {
    overlay: {
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000,
    },
    modal: {
      backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.1)',
      borderRadius: '15px', padding: '25px', color: '#fff',
      border: '1px solid rgba(255,255,255,0.2)', width: '300px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      textAlign: 'center',
    },
    btn: {
      marginTop: '15px', background: '#fff', color: '#333',
      border: 'none', padding: '8px 15px', borderRadius: '6px',
      cursor: 'pointer'
    }
  };

  export default GlassModal