import React from 'react';

function Body({ children }) {
  return (
    <section
      style={{
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </section>
  );
}

export default Body;
