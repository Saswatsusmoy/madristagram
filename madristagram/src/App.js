import Home from "./Pages/Home/Home";
import TopBar from "./Components/top-navbar/TopBar";
import LoginSignup from "./Components/Login_Signup/Login";
import SignUp from "./Components/Login_Signup/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
