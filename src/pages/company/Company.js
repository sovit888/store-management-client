import React from "react";
import { Row, Col } from "reactstrap";

const Company = () => {
  return (
    <>
      <div className="p-2 bg-white">
        <Row>
          <Col md={6}>
            <div className="text-center ">
              <h4 className="font-weight-bold mt-4">
                Software Innovation Company
              </h4>
              <p className="mb-0 mt-4">Established:2021</p>
              <p className="mb-0">Myagede-02,Jamune,Tanahun</p>
              <p className="mb-0">Gandaki, Nepal</p>
              <p className="mb-0">Contact: 065-571110</p>
            </div>
          </Col>
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48666.4137576552!2d84.1664092930794!3d27.982871963187545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995af59ab2a19ad%3A0xb13b651c24879abb!2sJamune%20Bhanjyang!5e1!3m2!1sen!2snp!4v1623749977821!5m2!1sen!2snp"
              style={{ border: "0", height: "300px", width: "100%" }}
              title="Sovit Thapa Company"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Company;
