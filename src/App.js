import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register";
import PasswordReset from "./components/PasswordReset";
import ResetPasswordForm from "./components/ResetPasswordForm";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            MyApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/passwordReset">
                  Password Reset
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwordReset" element={<PasswordReset />} />
          <Route path="/resetPassword/:token" element={<ResetPasswordForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
