import DebounceSearchDemo from "./components/DebounceSearchDemo.jsx";

import PaginationDemo from "./components/PaginationDemo.jsx";

function App() {
  return (
    <div>
      <h1>🪝 Coustom Hooks</h1>
      <h2>useDebounce</h2>
      <DebounceSearchDemo />
      <h2>usePagination</h2>
      <PaginationDemo />
    </div>
  );
}

export default App;
