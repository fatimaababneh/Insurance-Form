'use client';
import React, { useState } from 'react';
import { InsuranceFormGenerator } from '@/components/forms/InsuranceFormGenerator';
import SelectField from '@/components/reusableComponents/fields/SelectFIeld';

const formSchema = {
  AlqudsInsuranceCompany: {
    sampleA: { title: 'Alquds Insurance Form A', steps: [] },
    sampleB: { title: 'Alquds Insurance Form B', steps: [] },
  },
};

export default function HomePage() {
  const [selectedSample, setSelectedSample] = useState('');

  const samples = Object.entries(formSchema.AlqudsInsuranceCompany).map(
    ([key, schema]) => ({
      value: key,
      label: schema.title,
    })
  );

  const handleSampleChange = (e) => {
    setSelectedSample(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 space-y-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-blue-900">
          Insurance Form Previewer
        </h1>

        <SelectField
          name="sampleSelector"
          label="Available Samples"
          options={samples}
          value={selectedSample}
          onChange={handleSampleChange}
        />

        {selectedSample && (
          <div className="pt-4 border-t border-gray-200">
            <InsuranceFormGenerator
              selectedSample={selectedSample}
              formSchema={formSchema}
            />
          </div>
        )}
      </div>
    </div>
  );
}
