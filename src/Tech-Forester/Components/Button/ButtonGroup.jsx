import React from "react";
export const ButtonGroup = ({ 
    children, 
    vertical = false,
    className = '',
  }) => {
    return (
      <div 
        className={`
          inline-flex ${vertical ? 'flex-col' : 'flex-row'} 
          rounded-full shadow-sm
          ${className}
        `}
      >
        {React.Children.map(children, (child, index) => {
          // Add specific styling to each child
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              className: `
                ${child.props.className || ''}
                ${vertical ? 
                  index === 0 ? 'rounded-b-none' : 
                  index === React.Children.count(children) - 1 ? 'rounded-t-none' : 'rounded-none' :
                  index === 0 ? 'rounded-r-none' : 
                  index === React.Children.count(children) - 1 ? 'rounded-l-none' : 'rounded-none'
                }
                ${vertical ? '' : index !== 0 ? 'border-l-0' : ''}
                ${vertical ? index !== 0 ? 'border-t-0' : '' : ''}
              `,
            });
          }
          return child;
        })}
      </div>
    );
  };