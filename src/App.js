import "App.css";
import Search from "screens/Search";
import { UserSearchProvider } from "context/userSearchContext";

function App() {
  return (
    <div className="App">
      <UserSearchProvider>
        <Search />
      </UserSearchProvider>
    </div>
  );
}

export default App;
