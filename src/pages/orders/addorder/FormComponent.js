import { Col, FormGroup, Label, Input, FormFeedback } from "reactstrap";

export const FormField = ({ id, label, name, formik }) => {
  return (
    <Col col={6}>
      <FormGroup row>
        <Label for={id} sm={2} className="custom-label font-weight-bold">
          {label}
        </Label>
        <Col sm={4}>
          <Input
            name={name}
            id={id}
            className="custom-input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={formik.touched[name] && formik.errors[name] ? true : false}
          />
          <FormFeedback>
            {formik.touched[name] && formik.errors[name]
              ? formik.errors[name]
              : ""}
          </FormFeedback>
        </Col>
      </FormGroup>
    </Col>
  );
};

export const SelectField = ({ id, options, name, label, formik, setPrice }) => {
  return (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input
        type="select"
        name={name}
        id={id}
        className="custom-input"
        onChange={(e) => {
          let data = JSON.parse(e.target.value);
          formik.values[name] = data._id;
          setPrice(data.price);
        }}
        onBlur={formik.handleBlur}
        invalid={formik.touched[name] && formik.errors[name] ? true : false}
      >
        {options.map((value, index) => {
          return (
            <option key={index} value={JSON.stringify(value)}>
              {value.name}
            </option>
          );
        })}
      </Input>
      <FormFeedback>
        {formik.touched[name] && formik.errors[name] ? formik.errors[name] : ""}
      </FormFeedback>
    </FormGroup>
  );
};

export const FormNormalField = ({ id, name, label, formik }) => {
  return (
    <FormGroup>
      <Label for={id} className="custom-label font-weight-bold">
        {label}
      </Label>

      <Input
        name={name}
        id={id}
        className="custom-input"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
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
