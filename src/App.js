import "App.css";
import Search from "screens/Search";
import { SearchProvider } from "context/searchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Search />
      </SearchProvider>
    </div>
  );
}

export default App;
