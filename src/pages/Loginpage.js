// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const LoginPage = () => {
//   return (
//     <>
//       <Formik
//         initialValues={{
//           email: "",
//           pwd: "",
//         }}
//         validationSchema={Yup.object({
//           email: Yup.string()
//             .email("Email is not valid")
//             .required("Email is mandatory"),

//           pwd: Yup.string()
//             .required("Password is mandatory")
//             .matches(
//               /(?=.[a-zA-Z])(?=.[0-9])(?=.*[!@#$&-])[a-z0-9A-Z!@#$&-]{8,}$/,
//               "Wrong Email or Password"
//             ),
//         })}
//         onSubmit={(values) => {
//           // Handle form submission
//           console.log(values);
//         }}
//       >
//         <div className="container">
//           <div className="d-flex justify-content-center">
//             <div className="col-md-5 shadow m-5">
//               <Form className="p-3">
//                 <h1>Login Page</h1>

//                 <div className="form-floating mb-3">
//                   <Field
//                     type="email"
//                     id="email"
//                     placeholder=""
//                     className="form-control"
//                     name="email"
//                   />
//                   <label htmlFor="email">Email</label>
//                   <ErrorMessage name="email">
//                     {(msg) => <div className="text-danger">{msg}</div>}
//                   </ErrorMessage>
//                 </div>

//                 <div className="form-floating mb-3">
//                   <Field
//                     type="password"
//                     id="pwd"
//                     placeholder=""
//                     className="form-control"
//                     name="pwd"
//                   />
//                   <label htmlFor="pwd">Password</label>
//                   <ErrorMessage name="pwd">
//                     {(msg) => <div className="text-danger">{msg}</div>}
//                   </ErrorMessage>
//                 </div>

//                 <div className="mb-2 w-100">
//                   <button type="submit" className="btn btn-primary w-100">
//                     Login
//                   </button>
//                 </div>
//               </Form>
//             </div>
//           </div>
//         </div>
//       </Formik>
//     </>
//   );
// };

// export default LoginPage;

import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Loginpage = () => {
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
            .required("First name is mandatory")
            .max(20, "First name must be lower than 20 characters"),
          lname: Yup.string()
            .required("Last name is mandatry")
            .max(20, "Last name length cannot be more than 20"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is mandatory"),
        })}
      >
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="col-md-5 shadow m-5">
              <Form className="p-3">
                <h1 className="text-center">Signup</h1>

                <div className="form-floating mb-2">
                  <Field
                    type="text"
                    className="form-control"
                    name="fname"
                    id="fname"
                    placeholder=""
                  />
                  <label htmlFor="fname">First Name</label>
                  {(msg) => <div className="text-danger">{msg}</div>}
                </div>

                <div className="form-floating mb-2">
                  <Field
                    type="text"
                    className="form-control"
                    name="lname"
                    id="lname"
                    placeholder=""
                  />
                  <label htmlFor="lname">Last Name</label>
                  {(msg) => <div className="text-danger">{msg}</div>}
                </div>

                <div className="form-floating mb-2">
                  <Field
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder=""
                  />
                  <label htmlFor="email">Email</label>
                  {(msg) => <div className="text-danger">{msg}</div>}
                </div>

                <div className="form-floating mb-2">
                  <Field
                    type="password"
                    className="form-control"
                    name="pwd"
                    id="pwd"
                    placeholder=""
                  />
                  <label htmlFor="pwd">Password</label>
                  {(msg) => <div className="text-danger">{msg}</div>}
                </div>

                <div className="form-floating mb-2">
                  <Field
                    type="password"
                    className="form-control"
                    name="cpwd"
                    id="cpwd"
                    placeholder=""
                  />
                  <label htmlFor="cpwd">Confirl Password</label>
                  {(msg) => <div className="text-danger">{msg}</div>}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Loginpage;
