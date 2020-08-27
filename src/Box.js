import React from 'react';
import './Box.css';

const Box = ({ id, color, width, height, remove }) => {
  const styles = {
    backgroundColor: color,
    width: `${width}px`,
    height: `${height}px`,
  };

  const handleRemove = () => {
    remove(id);
  };
  return (
    <div>
      <div className='box' style={styles}></div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Box;
