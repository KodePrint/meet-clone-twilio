import React from 'react'

const Forms = ({children, className, innerRef}) => {
  return (
    <form ref={innerRef} className={`${className}`}>
      {children}
    </form>
  );
}

export default Forms;