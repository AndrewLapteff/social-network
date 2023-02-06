import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="/profile"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="/dialogs"
            element={<Dialogs state={props.state.dialogsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
