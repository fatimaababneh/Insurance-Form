import CheckboxField from "@/components/reusableComponents/fields/CheckBox";
import { InputField } from "../components/reusableComponents/fields/InputField";
import SelectField from "@/components/reusableComponents/fields/SelectFIeld";
import DateInputField from "@/components/reusableComponents/fields/DateInput";

export const FormSteper = ({ fields, formData, onChange }) => {
  return (
    <div className="space-y-4">
      {fields.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <div key={field.name}>
                <InputField
                  key={field.name}
                  field={field}
                  value={formData[field.name]}
                  onChange={onChange}
                  style={field.style}
                />
              </div>
            );
          case 'select':
            return (
                <div key={field.name}>
                    <SelectField
                    name={field.name}
                    label={field.label}
                    options={field.options || []}
                    value={formData[field.name] ?? ''}
                    onChange={(e) => onChange(field.name, e.target.value)}
                    />
                </div>
            );
          case 'checkbox':
            return (
              <div key={field.name}>
                <CheckboxField
                  label={field.label}
                  checked={formData[field.name]}
                  onChange={(e) => onChange(field.name, e.target.checked)}
                />
              </div>
            );
          case 'date':
            return (
              <div key={field.name}>
                <DateInputField
                  label={field.label}
                  checked={formData[field.name]}
                  onChange={(e) => onChange(field.name, e.target.checked)}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};
