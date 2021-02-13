import "App.css";
import Header from "components/Header";
import UserList from "components/UserList";
import Search from "screens/Search";
import Navigation from "components/Navigation";
import { UserSearchProvider } from "context/userSearchContext";

function App() {
  return (
    <div className="App">
      <UserSearchProvider>
        <Header />
        <Search />
        <Navigation />
        <UserList />
      </UserSearchProvider>
    </div>
  );
}

export default App;
