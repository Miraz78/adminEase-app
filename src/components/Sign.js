// ├── src
// │   ├── App.jsx
// │   ├── main.jsx
// │   ├── index.css
// │   ├── assets/
// │   ├── components/
// │   │   ├── Navbar.jsx
// │   ├── pages/
// │   │   ├── Home.jsx
// │   │   ├── Login.jsx
// │   │   ├── Signup.jsx
// │   │   ├── Dashboard.jsx
// │   ├── context/
// │   │   ├── AuthContext.jsx
// │   │   ├── ThemeContext.jsx
// │   ├── routes/
// │   │   ├── ProtectedRoute.jsx
// │   ├── services/
// │   │   ├── api.js
// │   ├── utils/
// │   │   ├── tokenUtils.js
// │   └── hooks/
// │       ├── useAuth.js
// │       └── useTokenExpiration.js

// // ✅ Signup.jsx
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
//       const res = await axios.post('/auth/signup', { email, password });
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

// // ✅ Token Expiration UI Alert: useTokenExpiration.js
// import { useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
// import { useAuth } from './useAuth';

// const useTokenExpiration = () => {
//   const { token, logout } = useAuth();

//   useEffect(() => {
//     if (!token) return;

//     const { exp } = jwtDecode(token);
//     const expirationTime = exp * 1000 - 60000; // 1 min before expiry

//     const timeout = setTimeout(() => {
//       alert('Session expiring soon!');
//     }, expirationTime - Date.now());

//     return () => clearTimeout(timeout);
//   }, [token]);
// };

// export default useTokenExpiration;

// // ✅ In App.jsx (Wrap Routes)
// import useTokenExpiration from './hooks/useTokenExpiration';

// function App() {
//   useTokenExpiration();
//   return (
//     // routing and providers here
//   );
// }

// // Add Signup route
// <Routes>
//   <Route path="/signup" element={<Signup />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
// </Routes>
