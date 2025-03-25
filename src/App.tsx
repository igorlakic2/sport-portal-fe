import "./App.css";
import Home from "./Home";
import ErrorBoundary from "./infrastructure/error/ErrorBoundary";
import TopLevelErrorPage from "./infrastructure/error/TopLevelErrorPage";

function App() {
  return (
    <div>
      <ErrorBoundary fallback={<TopLevelErrorPage />}>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
