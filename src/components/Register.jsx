import React from 'react';
import { useForm } from 'react-hook-form';
//      ****   Basic state mangement ****
// function Register() {
//     const [input, setInput] = useState({
//         name: '',
//         email: '',
//         password:''
//     })

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setInput((prev) => ({...prev,
//             [name]:value
//         }))
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(input,"Register data")
//     }
//     return (
//         <>
//             <form onSubmit={handleSubmit }>
//                 <div>
//                     <label>
//                         Name: <input type='text' name='name' value={input.name} placeholder='Name' onChange={handleInput} required/>
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Email: <input type='text' name='email' value={input.email} placeholder='Email' onChange={handleInput} required />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Password: <input type='password' name='password' value={input.password} placeholder='Password' onChange={handleInput} required />
//                     </label>
//                 </div>
//                 <button type='submit'>Register</button>
//             </form>
//         </>
//     )
// }
// export default Register;

//      ****   Basic state mangement ****

function Register() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const submitHandler = (data) => {
        console.log(data)
        reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(submitHandler)}>

                <label>
                    Name:
                    <input {...register("name", { required: "Name is required" })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>
                <label>
                    Email:
                    <input {...register("email", {
                        required: 'Email is required', pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format",
                        },
                    })} />
                    {errors.email && errors.email.message}
                </label>
                <label>
                    Password:
                    <input {...register("password", { required: "Password is required" })} />
                    {errors.password && errors.password.message}
                </label>

                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default Register;