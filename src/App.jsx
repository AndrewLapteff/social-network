import "./App.css";
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
            element={
              <Profile
                state={props.store.state.profilePage}
                dispatch={props.store.dispatch}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                state={props.store.state.profilePage}
                dispatch={props.store.dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                state={props.store.state.dialogsPage}
                dispatch={props.store.dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
