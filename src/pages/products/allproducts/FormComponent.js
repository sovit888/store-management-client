import React from "react";
import { FormGroup, Label, CustomInput, Input } from "reactstrap";
import Select from "react-select";

export const FormField = ({ id, name, label }) => {
  return (
    <FormGroup>
      <Label for={id} className="custom-label">
        {label}
      </Label>
      <Input type="text" name={name} id={id} className="custom-input" />
    </FormGroup>
  );
};

export const FileField = () => {
  return (
    <FormGroup>
      <Label for="product-image" className="custom-label">
        Product File
      </Label>
      <CustomInput
        type="file"
        id="product-image"
        name="image"
        label="Pick a file"
      />
    </FormGroup>
  );
};

export const DescriptionField = () => {
  return (
    <FormGroup>
      <Label for="description">Descriptions</Label>
      <Input type="textarea" name="description" id="description" rows={3} />
    </FormGroup>
  );
};

export const SelectField = ({ label, name, id, options }) => {
  return (
    <FormGroup>
      <Label for="exampleSelectMulti" className="custom-label">
        {label}
      </Label>
      <Input type="select" name={name} id={id} className="custom-input">
        {options.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </Input>
    </FormGroup>
  );
};

export const MultiSelect = ({ options, label }) => {
  return (
    <FormGroup>
      <Label className="custom-label">{label}</Label>
      <Select
        defaultValue={[]}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </FormGroup>
  );
};
