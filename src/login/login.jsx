import React from 'react';


import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import './login.css';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main>
      <div className="login-container">
        {authState === AuthState.Unathenticated && <h2>Log in or Sign up</h2>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
            />
        )}
      </div>
    </main>
  );
}

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const password = e.target.password.value;

//     const response = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       onAuthChange(data.username, AuthState.Authenticated);
//     } else {
//       alert('Login failed');
//     }
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const password = e.target.password.value;

//     const response = await fetch('/api/auth/create', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       alert('Account created! You can now log in.');
//     } else {
//       const data = await response.json();
//       alert(data.msg || 'Error creating account');
//     }
//   };

//   const handleLogout = async () => {
//     await fetch('/api/auth/logout', { method: 'DELETE' });
//     onAuthChange('', AuthState.Unauthenticated);
//   };

//   return (
//     <div className="login-box text-center">
//       {authState === AuthState.Authenticated ? (
//         <div className="user-info">
//           <h3>Welcome, {userName}!</h3>
//           <button className="btn btn-secondary btn-sm" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <div id="login">
//           <h5>Login or Create Account</h5>
//           <form onSubmit={handleLogin}>
//             <div className="input-group mb-1">
//               <input
//                 className="form-control"
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="Username"
//                 required
//               />
//             </div>
//             <div className="input-group mb-1">
//               <input
//                 className="form-control"
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="mt-2">
//               <button type="submit" className="btn btn-primary btn-sm me-2">
//                 Login
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary btn-sm"
//                 onClick={handleCreate}
//               >
//                 Create
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
