import React from 'react';
import { AuthState } from './authState';
import './login.css';

export function Login({ userName, authState, onAuthChange}) {
    return (
      <div className="login-box">
        {authState === AuthState.Authenticated ? (
          <div className="user-info">
            <span><h3>{userName}</h3></span>
            <button 
              className="btn btn-secondary btn-sm" 
              onClick={() => onAuthChange('', AuthState.Unauthenticated)}
            >
              Logout
            </button>
          </div>
        ) : (
          <div id="login">
            <h5>Login or Create Account</h5>
            <form onSubmit={(e) => {
              e.preventDefault();
              const username = e.target.username.value;
              onAuthChange(username, AuthState.Authenticated);
            }}>
              <div className="input-group mb-1">
                <input 
                  className="form-control" 
                  type="text" 
                  id="username" 
                  name="username" 
                  placeholder="Username" 
                  required 
                  pattern=".*" 
                />
              </div>
              <div className="input-group mb-1">
                <input 
                  className="form-control" 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Password" 
                  required 
                  pattern=".*" 
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm">Login</button>
              <button type="submit" className="btn btn-secondary btn-sm">Create</button>
            </form>
          </div>
        )}
      </div>
)}