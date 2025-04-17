import React from 'react';

/* 2. Slide-in Bottom Modal */
 const SlideBottomModal = ({ isOpen, onClose, children }) => {
    return (
      <div style={{ ...slideStyles.overlay, display: isOpen ? 'flex' : 'none' }}>
        <div style={slideStyles.modal}>
          {children}
          <button style={slideStyles.btn} onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  const slideStyles = {
    overlay: {
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center',
      alignItems: 'flex-end', zIndex: 1000,
    },
    modal: {
      background: '#fff', width: '100%', borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px', padding: '20px', textAlign: 'center',
    },
    btn: {
      marginTop: '15px', padding: '8px 12px', background: '#444',
      color: '#fff', border: 'none', borderRadius: '5px',
    }
  };

  export default SlideBottomModal;