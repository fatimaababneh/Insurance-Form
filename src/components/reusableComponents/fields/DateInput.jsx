import React from 'react';

const DateInputField = ({ name, label, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        type="date"
        id={name}
        name={name}
        value={value || ''}
        onChange={onChange}
        required={required}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default DateInputField;
