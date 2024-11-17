import React, { useState } from 'react';

function AuthPage() {
  // States for Login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // States for Registration
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');

  // Handle Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginEmail === 'user@example.com' && loginPassword === 'password') {
      setLoginMessage('Login successful!');
    } else {
      setLoginMessage('Invalid email or password.');
    }
  };

  // Handle Registration form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerUsername && registerEmail && registerPassword) {
      setRegisterMessage('Registration successful!');
    } else {
      setRegisterMessage('Please fill all the fields.');
    }
  };

  return (
    <div>
      {/* Login Form */}
      {!isRegistering ? (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <label>Email:</label>
              <input 
                type="email" 
                value={loginEmail} 
                onChange={(e) => setLoginEmail(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password" 
                value={loginPassword} 
                onChange={(e) => setLoginPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {loginMessage && <p>{loginMessage}</p>} {/* Display login message */}

          {/* Link to Registration */}
          <p>Don't have an account? <span onClick={() => setIsRegistering(true)} style={{ color: 'blue', cursor: 'pointer' }}>Register here</span></p>
        </div>
      ) : (
        // Registration Form (when isRegistering is true)
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div>
              <label>Username:</label>
              <input 
                type="text" 
                value={registerUsername} 
                onChange={(e) => setRegisterUsername(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Email:</label>
              <input 
                type="email" 
                value={registerEmail} 
                onChange={(e) => setRegisterEmail(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Password:</label>
              <input 
                type="password" 
                value={registerPassword} 
                onChange={(e) => setRegisterPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Register</button>
          </form>
          {registerMessage && <p>{registerMessage}</p>} {/* Display registration message */}

          {/* Link to Login */}
          <p>Already have an account? <span onClick={() => setIsRegistering(false)} style={{ color: 'blue', cursor: 'pointer' }}>Login here</span></p>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
