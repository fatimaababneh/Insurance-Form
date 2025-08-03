'use client';
import React, { useState } from 'react';
import { FormSteper } from '@/engines/FormBuilder';
import { AlqudsInsuranceCompany } from '@/schemas/companiesSchema.json';

export const InsuranceFormGenerator = ({ formSchema, selectedSample }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  console.log(AlqudsInsuranceCompany, 'companiesSchema');
  const step = AlqudsInsuranceCompany[selectedSample].steps[currentStep];
  console.log(step, 'steppp');

  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goToNext = () => {
    if (currentStep < formSchema.steps.length - 1) {
    }
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6 px-6 py-8 bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl shadow-md">
      <h1 className="text-3xl font-extrabold text-blue-900 underline-offset-4 tracking-tight">
        {AlqudsInsuranceCompany[selectedSample].title}
      </h1>

      {step && (
        <div className="bg-white shadow-md border border-gray-200 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-purple-800 mb-4">{step.label}</h2>
          <FormSteper
            key={currentStep}
            fields={step.fields}
            formData={formData}
            onChange={handleFieldChange}
            style={step.fields}
          />
        </div>
      )}

      {/* handle step movement */}
      {currentStep < AlqudsInsuranceCompany[selectedSample].steps.length && (
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium shadow transition"
            onClick={() => setCurrentStep(currentStep !== 0 ? currentStep - 1 : currentStep)} >Previous
          </button>
          <button
            className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow transition"
            onClick={() =>
              setCurrentStep(
                currentStep !== AlqudsInsuranceCompany[selectedSample].steps.length - 1 ? currentStep + 1 : currentStep)}> Next </button>

        </div>
      )}
    </div>
  );
};
