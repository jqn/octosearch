import "App.css";
import Header from "components/Header";
import UserList from "components/UserList";
import Search from "screens/Search";
import { UserSearchProvider } from "context/userSearchContext";

function App() {
  return (
    <div className="App">
      <UserSearchProvider>
        <Header />
        <Search />
        <UserList />
      </UserSearchProvider>
    </div>
  );
}

export default App;
