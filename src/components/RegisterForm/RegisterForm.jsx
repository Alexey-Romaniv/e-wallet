import {useDispatch} from "react-redux";
import {registration} from "../../redux/auth/authOperations";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";


const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});

export const RegisterForm = () => {

    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{name: "", email: "", password: ""}}
            validationSchema={RegisterSchema}
            onSubmit={(values, {setSubmitting}) => {
                dispatch(registration(values));
                setSubmitting(false);
                toast.success("Registration successful");

            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="name" placeholder="Name"/>
                    <ErrorMessage name="name" >
                        {(msg) => (
                            <div>
                                {msg}
                                {toast.error(msg)}
                            </div>
                        )}
                    </ErrorMessage>
                    <Field type="email" name="email" placeholder="Email"/>
                    <ErrorMessage name="email">
                        {(msg) => (
                            <div>
                                {msg}
                                {toast.error(msg)}
                            </div>
                        )}
                    </ErrorMessage>
                    <Field type="password" name="password" placeholder="Password"/>
                    <ErrorMessage name="password">
                        {(msg) => (
                            <div>
                                {msg}
                                {toast.error(msg)}
                            </div>
                        )}
                    </ErrorMessage>
                    <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                    />
                    <ErrorMessage name="confirmPassword">
                        {(msg) => (
                            <div>
                                {msg}
                                {toast.error(msg)}
                            </div>
                        )}
                    </ErrorMessage>
                    <button type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
// import React from "react";
// import {useFormik} from "formik";
// import * as Yup from "yup";
// import {toast} from "react-toastify";
//
// export const RegisterForm = () => {
//     const dispatch = useDispatch();
//     const formik = useFormik({
//         initialValues: {
//             name: "", email: "", password: "", confirmPassword: ""
//         }, validationSchema: Yup.object({
//             name: Yup.string().required("Name i required"), email: Yup.string()
//                 .email("Invalid email address")
//                 .required("Email is required"), password: Yup.string()
//                 .min(8, "Password must be at least 8 characters long")
//                 .required("Password is required"), confirmPassword: Yup.string()
//                 .oneOf([Yup.ref("password"), null], "Passwords must match")
//                 .required("Confirm password is required")
//         }), onSubmit: (values, {setSubmitting}) => {
//             toast.success("Registration successful!");
//             dispatch(registration(values))
//             setSubmitting(false);
//         }
//     });
//
//     return (<><form onSubmit={formik.handleSubmit}>
//             <div>
//                 <input type='text'
//                        id='name'
//                        name='name'
//                        placeholder='Name'
//                        onChange={formik.handleChange}
//                        onBlur={formik.handleBlur}
//                        value={formik.values.name}
//                 />
//                 {formik.touched.name && formik.errors.name ? toast.error(formik.errors.name) : null}</div>
//                 <div><input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.email}
//                 />
//                 {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
//             </div>
//             <div>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="Password"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.password}
//                 />
//                 {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
//             </div>
//             <div>
//                 <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     placeholder="Confirm Password"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.confirmPassword}
//                 />
//                 {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
//                     <div>{formik.errors.confirmPassword}</div>) : null}
//             </div>
//             <button type="submit">Submit</button>
//         </form></>);
// };
//
