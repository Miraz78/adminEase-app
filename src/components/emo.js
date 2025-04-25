// // File structure (cleaned, valid version)
// src/
// ├── App.jsx
// ├── main.jsx
// ├── index.css
// ├── assets/
// ├── components/
// │   └── Navbar.jsx
// ├── pages/
// │   ├── Home.jsx
// │   ├── Login.jsx
// │   ├── Signup.jsx
// │   ├── Dashboard.jsx
// ├── context/
// │   ├── AuthContext.jsx
// │   └── ThemeContext.jsx
// ├── routes/
// │   └── ProtectedRoute.jsx
// ├── services/
// │   └── api.js
// ├── utils/
// │   └── tokenUtils.js
// ├── hooks/
// │   ├── useAuth.js
// │   └── useTokenExpiration.js
// └── mocks/
//     ├── browser.js
//     └── handlers.js

// // App.jsx
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import ProtectedRoute from './routes/ProtectedRoute';
// import useTokenExpiration from './hooks/useTokenExpiration';
// import { AuthProvider } from './context/AuthContext';

// function App() {
//   useTokenExpiration();

//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

// // Signup.jsx (in pages/)
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../services/api';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/auth/signup', { email, password });
//       alert('Signup successful. Please log in.');
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Signup</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSignup}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

// // Login.jsx, Dashboard.jsx, ProtectedRoute.jsx, AuthContext.jsx, useTokenExpiration.js and others follow similar modular structure.

// // mocks/browser.js
// import { setupWorker } from 'msw';
// import { handlers } from './handlers';
// export const worker = setupWorker(...handlers);

// // mocks/handlers.js
// import { rest } from 'msw';
// import jwt from 'jsonwebtoken';

// const users = [];

// export const handlers = [
//   rest.post('/auth/signup', async (req, res, ctx) => {
//     const { email, password } = await req.json();
//     if (users.find(u => u.email === email)) {
//       return res(ctx.status(400), ctx.json({ message: 'User already exists' }));
//     }
//     users.push({ email, password });
//     return res(ctx.status(201));
//   }),

//   rest.post('/auth/login', async (req, res, ctx) => {
//     const { email, password } = await req.json();
//     const user = users.find(u => u.email === email && u.password === password);
//     if (!user) return res(ctx.status(401), ctx.json({ message: 'Invalid credentials' }));

//     const token = jwt.sign({ email }, 'secret', { expiresIn: '5m' });
//     return res(ctx.status(200), ctx.json({ token }));
//   }),
// ];
