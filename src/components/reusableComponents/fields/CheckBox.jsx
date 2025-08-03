import React from 'react';

const CheckboxField = ({ label, checked, onChange, name }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked || false}
        onChange={onChange}
        name={name}
        className="w-4 h-4 accent-purple-600"
      />
      <span className="text-sm text-gray-800">{label}</span>
    </label>
  );
};

export default CheckboxField;
