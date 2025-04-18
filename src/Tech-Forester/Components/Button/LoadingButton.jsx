// Loading Button Component
export const LoadingButton = ({ 
    children, 
    loading = false,
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
      blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white',
      red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white',
      green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 text-white',
      gray: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 text-white',
    };
  
    // Spinner SVG
    const Spinner = () => (
      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    );
  
    return (
      <button
        type={type}
        disabled={disabled || loading}
        onClick={loading ? undefined : onClick}
        className={`
          rounded-md font-medium transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2
          flex justify-center items-center
          ${colors[color]}
          ${sizes[size]}
          ${(disabled || loading) ? 'opacity-70 cursor-not-allowed' : ''}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
      >
        {loading ? (
          <>
            <Spinner />
            <span className="ml-2">{children}</span>
          </>
        ) : children}
      </button>
    );
  };