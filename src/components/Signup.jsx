import React, { useState } from 'react';

function Signup() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formInput);
    setFormInput({ name: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formInput.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formInput.email} onChange={handleChange} placeholder="Email" required />
      <input name="password" value={formInput.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
