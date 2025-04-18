import React from "react";

const FormModal = ({ isOpen, onClose, onSubmit }) => {
    const [email, setEmail] = React.useState('');
  
    if (!isOpen) return null;
  
    return (
      <div style={formStyles.overlay}>
        <div style={formStyles.modal}>
          <h3>Subscribe</h3>
          <input
            style={formStyles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div style={formStyles.actions}>
            <button onClick={onClose} style={formStyles.btnCancel}>Cancel</button>
            <button onClick={() => { onSubmit(email); setEmail(''); }} style={formStyles.btnSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  };
  
  const formStyles = {
    overlay: {
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    },
    modal: {
      background: '#fff', borderRadius: '10px', padding: '20px', width: '300px',
      display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center'
    },
    input: {
      padding: '8px', border: '1px solid #ccc', borderRadius: '5px'
    },
    actions: {
      display: 'flex', justifyContent: 'space-between', marginTop: '10px'
    },
    btnCancel: {
      padding: '6px 12px', background: '#ccc', border: 'none', borderRadius: '5px'
    },
    btnSubmit: {
      padding: '6px 12px', background: '#4CAF50', color: 'white',
      border: 'none', borderRadius: '5px'
    }
  };

  export default FormModal