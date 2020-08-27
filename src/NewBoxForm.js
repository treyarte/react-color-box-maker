import React, { useState } from 'react';
import './NewBoxForm.css';

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: '',
    width: '',
    height: '',
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-box-form'>
        <div className='form-control'>
          <label htmlFor='color'>Color</label>
          <input
            id='color'
            type='text'
            name='color'
            value={formData.color}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='width'>Width</label>
          <input
            id='width'
            type='number'
            name='width'
            value={formData.width}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='height'>Height</label>
          <input
            id='height'
            type='number'
            name='height'
            value={formData.height}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <button>Add Box</button>
        </div>
      </div>
    </form>
  );
};

export default NewBoxForm;
