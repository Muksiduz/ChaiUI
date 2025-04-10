import { useState } from 'react';

export const ToggleSwitch = ({ 
  label = '', 
  enabled = false, 
  onToggle = () => {}, 
  className = '' 
}) => {
  const [isOn, setIsOn] = useState(enabled);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {label && <span className="text-sm font-medium">{label}</span>}
      <button
        onClick={handleToggle}
        className={`
          w-11 h-6 flex items-center rounded-full p-1
          ${isOn ? 'bg-green-500' : 'bg-gray-300'}
          transition-colors duration-300
        `}
      >
        <div
          className={`
            bg-white w-4 h-4 rounded-full shadow-md transform
            ${isOn ? 'translate-x-5' : 'translate-x-0'}
            transition-transform duration-300
          `}
        />
      </button>
    </div>
  );
};
