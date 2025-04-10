export const LinkButton = ({ 
    children, 
    onClick, 
    disabled = false,
    size = 'md',
    color = 'blue',
    underline = true,
    className = '',
  }) => {
    const sizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };
  
    const colors = {
      blue: 'text-blue-600 hover:text-blue-800',
      red: 'text-red-600 hover:text-red-800',
      green: 'text-green-600 hover:text-green-800',
      gray: 'text-gray-600 hover:text-gray-800',
      purple: 'text-purple-600 hover:text-purple-800',
    };
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          bg-transparent font-medium focus:outline-none
          transition-colors duration-200 ease-in-out
          ${colors[color]}
          ${sizes[size]}
          ${underline ? 'hover:underline' : ''}
          ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
      >
        {children}
      </button>
    );
  };