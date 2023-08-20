import React from 'react';
import './App.css';
import PathFinderVisualizer from './PathFinderVisualizer/PathFinderVisualizer';

function App() {
  const body = document.getElementById('bg-color')
  return (
    <div className="App">
      <PathFinderVisualizer></PathFinderVisualizer>
    </div>
  );
}

export default App;
