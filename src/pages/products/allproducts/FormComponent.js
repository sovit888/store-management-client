import React from "react";
import { FormGroup, Label, CustomInput, Input, FormFeedback } from "reactstrap";
import Select from "react-select";

export const FormField = ({ id, name, label, formik }) => {
  return (
    <FormGroup>
      <Label for={id} className="custom-label">
        {label}
      </Label>
      <Input
        type="text"
        name={name}
        id={id}
        className="custom-input"
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        invalid={formik.touched[name] && formik.errors[name] ? true : false}
      />
      <FormFeedback>
        {formik.touched[name] && formik.errors[name] ? formik.errors[name] : ""}
      </FormFeedback>
    </FormGroup>
  );
};

export const FileField = ({ setImage }) => {
  return (
    <FormGroup>
      <Label for="product-image" className="custom-label">
        Product File
      </Label>
      <CustomInput
        type="file"
        id="product-image"
        name="image"
        accept="image/*"
        label="Pick a file"
        onChange={(e) => setImage(e.target.files[0])}
      />
    </FormGroup>
  );
};

export const DescriptionField = ({ formik }) => {
  return (
    <FormGroup>
      <Label for="description">Descriptions</Label>
      <Input
        type="textarea"
        name="description"
        id="description"
        rows={3}
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </FormGroup>
  );
};

export const SelectField = ({ label, name, id, options, formik }) => {
  return (
    <FormGroup>
      <Label for="exampleSelectMulti" className="custom-label">
        {label}
      </Label>
      <Input
        type="select"
        name={name}
        id={id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="custom-input"
        invalid={formik.touched[name] && formik.errors[name] ? true : false}
      >
        {options.map((value, index) => {
          return <option key={index}>{value.name}</option>;
        })}
      </Input>
      <FormFeedback>
        {formik.touched[name] && formik.errors[name] ? formik.errors[name] : ""}
      </FormFeedback>
    </FormGroup>
  );
};

export const MultiSelect = ({
  options,
  label,
  handleProductAttribute,
  defaultValue = [],
}) => {
  return (
    <FormGroup>
      <Label className="custom-label">{label}</Label>
      <Select
        defaultValue={defaultValue}
        isMulti
        name="colors"
        options={options.map((value) => {
          return { label: value, value };
        })}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleProductAttribute(label)}
      />
    </FormGroup>
  );
};
