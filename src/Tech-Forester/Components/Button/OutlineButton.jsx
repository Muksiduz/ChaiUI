export const OutlineButton = ({ 
    children, 
    onClick, 
    disabled = false, 
    fullWidth = false,
    color = 'blue',
    size = 'md',
    className = '',
    type = 'button'
  }) => {
    const sizes = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-2.5 text-lg',
      xl: 'px-6 py-3 text-xl'
    };
  
    const colors = {
      blue: 'border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500',
      red: 'border-red-500 text-red-500 hover:bg-red-50 focus:ring-red-500',
      green: 'border-green-500 text-green-500 hover:bg-green-50 focus:ring-green-500',
      purple: 'border-purple-500 text-purple-500 hover:bg-purple-50 focus:ring-purple-500',
      gray: 'border-gray-500 text-gray-500 hover:bg-gray-50 focus:ring-gray-500',
    };
  
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`
          bg-transparent border-2 rounded-full
          font-medium transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${colors[color]}
          ${sizes[size]}
          ${disabled ? 'opacity-60 cursor-not-allowed' : 'transform hover:-translate-y-0.5 active:translate-y-0'}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
      >
        {children}
      </button>
    );
  };