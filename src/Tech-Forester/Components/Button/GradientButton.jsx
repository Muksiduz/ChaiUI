export const GradientButton = ({ 
    children, 
    onClick, 
    disabled = false, 
    fullWidth = false,
    gradient = 'blue-to-purple',
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
  
    const gradients = {
      'blue-to-purple': 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:ring-purple-500',
      'green-to-blue': 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:ring-blue-500',
      'orange-to-red': 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 focus:ring-red-500',
      'pink-to-purple': 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 focus:ring-purple-500',
    };
  
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`
          text-white rounded-full shadow-md
          font-medium transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${gradients[gradient]}
          ${sizes[size]}
          ${disabled ? 'opacity-60 cursor-not-allowed' : 'transform hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg'}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
      >
        {children}
      </button>
    );
  };