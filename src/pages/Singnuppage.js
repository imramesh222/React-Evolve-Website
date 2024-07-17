import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  pwd: "",
  cpwd: "",
};

const validationSchema = Yup.object({
  fname: Yup.string()
    .required(/^[a-zA-z]+$/, "First name is mandatory")
    .max(20, "First name must be less than 20 characters"),

  lname: Yup.string()
    .required(/^[a-zA-z]+$/, "Last name is mandatory")
    .max(20, "Last name must be less than 20 characters"),

  email: Yup.string()
    .email("Email is mandatory")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),

  pwd: Yup.string()
    .required("Password is mandatory")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/,
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
    ),

  cpwd: Yup.string()
    .required("Confirm password is mandatory")
    .oneOf([Yup.ref("pwd"), null], "Passwords must match"),
});

const SignupPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow m-5 p-3">
          <h1 className="text-center mb-4">Signup Page</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  First Name
                </label>
                <Field
                  type="text"
                  id="fname"
                  className="form-control"
                  name="fname"
                  placeholder="Enter your first name"
                />
                <ErrorMessage
                  name="fname"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lname" className="form-label">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lname"
                  className="form-control"
                  name="lname"
                  placeholder="Enter your last name"
                />
                <ErrorMessage
                  name="lname"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  Password
                </label>
                <Field
                  type="password"
                  id="pwd"
                  className="form-control"
                  name="pwd"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="pwd"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cpwd" className="form-label">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  id="cpwd"
                  className="form-control"
                  name="cpwd"
                  placeholder="Confirm your password"
                />
                <ErrorMessage
                  name="cpwd"
                  component="div"
                  className="text-danger"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Signup
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
