import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (box) => {
    const newBox = { ...box, id: uuid() };
    setBoxes((box) => [...boxes, newBox]);
  };

  const remove = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };
  return (
    <div className='box-list'>
      <div>
        <h3>BoxList</h3>
      </div>
      <div className='box-form'>
        <NewBoxForm addBox={addBox} />
      </div>
      <div className='boxes'>
        {boxes.map(({ id, width, height, color }) => (
          <Box
            id={id}
            color={color}
            height={height}
            width={width}
            key={id}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
