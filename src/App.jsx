import DebounceSearchDemo from "./components/DebounceSearchDemo.jsx";

import PaginationDemo from "./components/PaginationDemo.jsx";
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Custom Hooks</h1>
      <h2 className="section-title">useDebounce</h2>
      <DebounceSearchDemo />
      <h2 className="section-title">usePagination</h2>
      <PaginationDemo />
    </div>
  );
}

export default App;
