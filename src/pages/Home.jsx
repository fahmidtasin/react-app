import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount(c => c + 1)}>count is {count}</button>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Home;
