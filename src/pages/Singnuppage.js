import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupPage = () => {
  return (
    <>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          pwd: "",
          cpwd: "",
        }}
        validationSchema={Yup.object({
          fname: Yup.string()
            .required("first name is mandatory")
            .max(20, "First name must be lower than 20 characters"),

          lname: Yup.string()
            .required("last name is mandatory")
            .max(20, "last name must be lower than 20 characters"),

          email: Yup.string()
            .email("email is invalid")
            .required("email is mandatory"),

          pwd: Yup.string()
            .required("password is mandatory")
            .matches(
              /(?=.[a-zA-Z])(?=.[0-9])(?=.*[!@#$&-])[a-z0-9A-Z!@#$&-]{8,}$/,
              "password is weak"
            ),

          cpwd: Yup.string()
            .required("confirm password is mandatory")
            .oneOf([Yup.ref("pwd"), null], "passwords must match"),
        })}
      >
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-5 shadow m-5">
              <Form className="p-3">
                <h1 className="text-center">Signup Page</h1>

                <div className="form-floating mb-2">
                  <Field
                    type="text"
                    id="fname"
                    placeholder=""
                    className="form-control"
                    name="fname"
                  />
                  <label htmlFor="fname">First Name</label>
                  <ErrorMessage name="fname">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    type="text"
                    id="lname"
                    placeholder=""
                    className="form-control"
                    name="lname"
                  />
                  <label htmlFor="lname">Last Name</label>
                  <ErrorMessage name="lname">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    type="email"
                    id="email"
                    placeholder=""
                    className="form-control"
                    name="email"
                  />
                  <label htmlFor="email">Email</label>
                  <ErrorMessage name="email">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    type="password"
                    id="pwd"
                    placeholder=""
                    className="form-control"
                    name="pwd"
                  />
                  <label htmlFor="pwd">Password</label>
                  <ErrorMessage name="pwd">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-floating mb-3">
                  <Field
                    type="password"
                    id="cpwd"
                    placeholder=""
                    className="form-control"
                    name="cpwd"
                  />
                  <label htmlFor="cpwd">Confirm Password</label>
                  <ErrorMessage name="cpwd">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="mb-2 w-100">
                  <button type="submit" className="btn btn-primary w-100">
                    Signup
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default SignupPage;
