import React from 'react'

const Forms = ({children, className}) => {
  return (
    <form className={className}>
      {children}
    </form>
  );
}

export default Forms;