// Secondary Button Component
export const SecondaryButton = ({ 
    children, 
    onClick, 
    disabled = false, 
    fullWidth = false,
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
  
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`
          bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full
          font-medium transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
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
  