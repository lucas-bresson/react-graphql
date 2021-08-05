import React, { useState } from 'react';

function AuthForm({ errors, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ email, password });
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col s5">
        <div className="input-field">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="errors">
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <button className="btn" onSubmit={() => {}}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
