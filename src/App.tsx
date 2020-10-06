import React from 'react';

import { parse } from './parser'

function App() {
  const str = "public async Task<boolean> MyClass<TKey, TValue>(ref Dictionary<int, double> parameter) { }";
  return (
    <div className="App">
      {str}
      <pre>{JSON.stringify(parse(str), undefined, 2)}</pre>
    </div>
  );
}

export default App;
