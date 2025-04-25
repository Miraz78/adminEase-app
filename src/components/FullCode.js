// // 1. AuthContext.js (React Auth Context with Refresh Token logic)
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const login = async (email, password) => {
//     try {
//       const res = await axios.post('/api/login', { email, password });
//       const { accessToken, refreshToken, user } = res.data;

//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);
//       setUser(user);
//       navigate('/dashboard');
//     } catch (err) {
//       alert('Login failed');
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     setUser(null);
//     navigate('/login');
//   };

//   const refreshAccessToken = async () => {
//     const refreshToken = localStorage.getItem('refreshToken');
//     if (!refreshToken) return logout();

//     try {
//       const res = await axios.post('/api/refresh', { refreshToken });
//       localStorage.setItem('accessToken', res.data.accessToken);
//     } catch (err) {
//       logout();
//     }
//   };

//   // Auto-refresh token logic every 5 minutes
//   useEffect(() => {
//     const interval = setInterval(() => {
//       refreshAccessToken();
//     }, 5 * 60 * 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // Check user on load
//   useEffect(() => {
//     const init = async () => {
//       const token = localStorage.getItem('accessToken');
//       if (!token) return setLoading(false);

//       try {
//         const res = await axios.get('/api/me', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(res.data);
//       } catch (err) {
//         await refreshAccessToken();
//       } finally {
//         setLoading(false);
//       }
//     };

//     init();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// // 2. ProtectedRoute.jsx
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const ProtectedRoute = ({ children, roles }) => {
//   const { user, loading } = useAuth();
//   if (loading) return <p>Loading...</p>;
//   if (!user) return <Navigate to='/login' />;
//   if (roles && !roles.includes(user.role)) return <Navigate to='/unauthorized' />;
//   return children;
// };

// export default ProtectedRoute;


// // 3. App.jsx
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './AuthContext';
// import ProtectedRoute from './ProtectedRoute';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import AdminPanel from './pages/AdminPanel';
// import Unauthorized from './pages/Unauthorized';

// const App = () => (
//   <BrowserRouter>
//     <AuthProvider>
//       <Routes>
//         <Route path='/login' element={<Login />} />
//         <Route
//           path='/dashboard'
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path='/admin'
//           element={
//             <ProtectedRoute roles={['admin']}>
//               <AdminPanel />
//             </ProtectedRoute>
//           }
//         />
//         <Route path='/unauthorized' element={<Unauthorized />} />
//       </Routes>
//     </AuthProvider>
//   </BrowserRouter>
// );

// export default App;


// // 4. Backend (Express.js Example)

// // POST /login
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   // Validate user from DB...
//   const accessToken = jwt.sign({ id: user.id, role: user.role }, ACCESS_SECRET, { expiresIn: '15m' });
//   const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, { expiresIn: '7d' });
//   res.json({ accessToken, refreshToken, user });
// });

// // POST /refresh
// app.post('/api/refresh', async (req, res) => {
//   const { refreshToken } = req.body;
//   jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403);
//     const newAccessToken = jwt.sign({ id: user.id }, ACCESS_SECRET, { expiresIn: '15m' });
//     res.json({ accessToken: newAccessToken });
//   });
// });

// // GET /me
// app.get('/api/me', authenticateToken, (req, res) => {
//   // Use decoded token to fetch user
//   res.json({ id: req.user.id, role: req.user.role });
// });
