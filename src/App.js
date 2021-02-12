import "App.css";
import Header from "components/Header";
import UserList from "components/UserList";
import Search from "screens/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <UserList />
    </div>
  );
}

export default App;
