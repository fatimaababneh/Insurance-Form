import React from "react";

export const InputField = ({ field, value, onChange, style }) => {
  const { label, name, type = "text", placeholder, required } = field;

  return (
    <div className={`form-group text-${style?.color} `} key={name}>
        <label htmlFor={name} className={`form-label font-bold text-${style?.color} mr-2`}>
            {label}:
        </label>
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder || ""}
            required={required}
            value={value || ""}
            onChange={(e) => onChange(name, e.target.value)}
            className="form-control"
        />
    </div>
  );
};
