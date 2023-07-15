import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [framework, setFramwork] = useState('React');
  return (
    <div>
      <h1>React useState example </h1>
      <p>Your favourite Frontend framework : {framework}</p>
      <div className="formInput">
        <label>Frontend framusework</label>
        <select
          className="form-select"
          onChange={(e) => setFramwork(e.target.value)}
        >
          <option value="Angular">Angular</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
        </select>
      </div>
    </div>
  );
}
