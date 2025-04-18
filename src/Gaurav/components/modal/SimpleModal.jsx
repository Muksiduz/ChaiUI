import React from 'react';

/* 1. Simple Centered Modal */
 const SimpleModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div style={simpleStyles.overlay}>
      <div style={simpleStyles.modal}>
        <h2>{title}</h2>
        <div>{children}</div>
        <button style={simpleStyles.btn} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const simpleStyles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', zIndex: 1000,
  },
  modal: {
    background: '#fff', padding: '20px', borderRadius: '10px', width: '300px',
    boxShadow: '0 0 15px rgba(0,0,0,0.3)', textAlign: 'center',
  },
  btn: {
    marginTop: '20px', padding: '10px 15px', border: 'none', background: '#333',
    color: '#fff', borderRadius: '5px', cursor: 'pointer',
  }
};


export default SimpleModal