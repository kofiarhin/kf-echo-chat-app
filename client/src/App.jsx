import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Chat from "./Pages/Chat/Chat";
import Profile from "./Pages/Profile/Profile";
import Users from "./Pages/Users/Users";
import { useEffect } from "react";
import useSocket from "./hooks/useSocket";

// app
const App = () => {
  const { socket } = useSocket();
  useEffect(() => {
    socket?.on("message", (data) => {
      console.log("refresh data");
    });
  }, [socket]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
