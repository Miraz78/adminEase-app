// Awesome, Ali! I'll now provide **five production-quality versions** of your Signup form, each using a different form handling strategy:

// ---

// ## ✅ Version 1: `useState` (Basic Controlled)

// ```jsx
// import React, { useState } from 'react';

// function SignupUseState() {
//   const [formInput, setFormInput] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted:', formInput);
//     setFormInput({ name: '', email: '', password: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" value={formInput.name} onChange={handleChange} placeholder="Name" required />
//       <input name="email" value={formInput.email} onChange={handleChange} placeholder="Email" required />
//       <input name="password" value={formInput.password} onChange={handleChange} placeholder="Password" required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default SignupUseState;
// ```

// ---

// ## ⚙️ Version 2: `useReducer`

// ```jsx
// import React, { useReducer } from 'react';

// const reducer = (state, action) => ({
//   ...state,
//   [action.name]: action.value
// });

// function SignupUseReducer() {
//   const [formInput, dispatch] = useReducer(reducer, {
//     name: '', email: '', password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({ name, value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted:', formInput);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" value={formInput.name} onChange={handleChange} placeholder="Name" required />
//       <input name="email" value={formInput.email} onChange={handleChange} placeholder="Email" required />
//       <input name="password" value={formInput.password} onChange={handleChange} placeholder="Password" required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default SignupUseReducer;
// ```

// ---

// ## ⚡ Version 3: `react-hook-form` (Highly Recommended)

// ```bash
// npm install react-hook-form
// ```

// ```jsx
// import React from 'react';
// import { useForm } from 'react-hook-form';

// function SignupReactHookForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = data => {
//     console.log('Submitted:', data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("name", { required: true })} placeholder="Name" />
//       {errors.name && <span>Name is required</span>}

//       <input {...register("email", { required: true })} placeholder="Email" />
//       {errors.email && <span>Email is required</span>}

//       <input {...register("password", { required: true })} placeholder="Password" />
//       {errors.password && <span>Password is required</span>}

//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default SignupReactHookForm;
// ```

// ---

// ## 🔮 Version 4: `Formik` + `Yup`

// ```bash
// npm install formik yup
// ```

// ```jsx
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid Email').required('Email is required'),
//   password: Yup.string().min(6, 'Min 6 chars').required('Password is required')
// });

// function SignupFormik() {
//   return (
//     <Formik
//       initialValues={{ name: '', email: '', password: '' }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => console.log('Submitted:', values)}
//     >
//       <Form>
//         <Field name="name" placeholder="Name" />
//         <ErrorMessage name="name" component="div" />

//         <Field name="email" placeholder="Email" />
//         <ErrorMessage name="email" component="div" />

//         <Field name="password" placeholder="Password" />
//         <ErrorMessage name="password" component="div" />

//         <button type="submit">Register</button>
//       </Form>
//     </Formik>
//   );
// }

// export default SignupFormik;
// ```

// ---

// ## 🧵 Version 5: Uncontrolled with `useRef`

// ```jsx
// import React, { useRef } from 'react';

// function SignupUncontrolled() {
//   const nameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       name: nameRef.current.value,
//       email: emailRef.current.value,
//       password: passwordRef.current.value
//     };
//     console.log('Submitted:', formData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={nameRef} placeholder="Name" required />
//       <input ref={emailRef} placeholder="Email" required />
//       <input ref={passwordRef} placeholder="Password" required />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default SignupUncontrolled;
// ```

// ---

// ## 🎯 Summary Chart

// | Method            | Best For               | Code Size | Validation Support | Performance | Community |
// |------------------|------------------------|-----------|--------------------|-------------|-----------|
// | `useState`        | Small/simple forms      | Small     | Manual             | Good        | High      |
// | `useReducer`      | Medium-large forms      | Medium    | Manual             | Good        | Medium    |
// | `react-hook-form` | Most real-world use     | Small     | Excellent          | Excellent   | High      |
// | `Formik`          | Heavy validation logic  | Large     | Excellent (Yup)    | Decent      | High      |
// | `useRef`          | Minimal/fast forms      | Small     | Hard to validate   | Very High   | Niche     |

// ---

// Let me know which one you'd like to integrate into your next project and I can help you with styling, API connection, or even custom validations!