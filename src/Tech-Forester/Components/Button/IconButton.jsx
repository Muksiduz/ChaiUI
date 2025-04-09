export const IconButton = ({ 
    icon,
    onClick, 
    disabled = false,
    color = 'blue',
    size = 'md',
    rounded = false,
    className = '',
    title = '',
    type = 'button'
  }) => {
    const sizes = {
      xs: 'p-1',
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-2.5',
      xl: 'p-3'
    };
  
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white',
      red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
      green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white',
      gray: 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-400 text-gray-800',
      transparent: 'bg-transparent hover:bg-gray-100 focus:ring-gray-400 text-gray-700',
    };
  
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        title={title}
        className={`
          transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${colors[color]}
          ${sizes[size]}
          ${rounded ? 'rounded-full' : 'rounded-md'}
          ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
          ${className}
        `}
      >
        {icon}
      </button>
    );
  };
  