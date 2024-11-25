import React, { useMemo } from 'react';

const UseMemo = ({ counter }) => {
  
  const squareCounter = useMemo(() => {
    console.log("Calculating square...");
    return counter * counter;
  }, [counter]); 

  return (
    <div>
      <h3>UseMemo Example</h3>
      <p>Counter square: {squareCounter}</p>
    </div>
  );
};

export default UseMemo;

