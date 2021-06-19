import { Col, FormGroup, Label, Input } from "reactstrap";

export const FormField = ({ id, label, name }) => {
  return (
    <Col col={6}>
      <FormGroup row>
        <Label for={id} sm={2} className="custom-label font-weight-bold">
          {label}
        </Label>
        <Col sm={4}>
          <Input name={name} id={id} className="custom-input" />
        </Col>
      </FormGroup>
    </Col>
  );
};

export const SelectField = ({ id, options, name, label }) => {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input type="select" name={name} id={id} className="custom-input">
        {options.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </Input>
    </FormGroup>
  );
};

export const FormNormalField = ({ id, name, label }) => {
  return (
    <FormGroup>
      <Label for={id} className="custom-label font-weight-bold">
        {label}
      </Label>

      <Input name={name} id={id} className="custom-input" />
    </FormGroup>
  );
};

export const FormDisableField = ({ id, name, label, value }) => {
  return (
    <FormGroup>
      <Label for={id} className="custom-label font-weight-bold">
        {label}
      </Label>

      <Input
        name={name}
        id={id}
        className="custom-input"
        disabled
        value={value}
      />
    </FormGroup>
  );
};

export const FormRowDisabledField = ({ id, label, name, value }) => {
  return (
    <Col col={6}>
      <FormGroup row>
        <Label for={id} xs={2} className="custom-label font-weight-bold">
          {label}
        </Label>
        <Col xs={10}>
          <Input
            name={name}
            id={id}
            className="custom-input"
            disabled
            value={value}
          />
        </Col>
      </FormGroup>
    </Col>
  );
};
