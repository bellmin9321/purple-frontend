import React from 'react';

function Body({ children }) {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-20px',
      }}
    >
      {children}
    </section>
  );
}

export default Body;
