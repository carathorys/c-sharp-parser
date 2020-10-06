import React from 'react';

import { findClosingTag } from './parser'

function App() {
  return (
    <div className="App">
      {JSON.stringify(findClosingTag("public static class MyClass<TKey, TValue<MyClass>> { }", 27, '<'))}
    </div>
  );
}

export default App;
