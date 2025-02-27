import React from "react";
import { Field, ErrorMessage } from "formik";

const StandardDropdown = ({ options, name }) => (
  <div className="input-box mb-4">
    <label className="label-color fw-bold mb-2" htmlFor={name}>
      Which Medium
    </label>
    <Field as="select" id={name} name={name} className="form-select standard-select">
      <option value="">Select Medium</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Field>
    <ErrorMessage name={name} component="div" className="text-danger mt-1" />
  </div>
);

export default StandardDropdown;
