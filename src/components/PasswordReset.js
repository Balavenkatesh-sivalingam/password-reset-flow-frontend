import { useState } from "react";
import { API_URL } from "../config"; // import backend URL

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/users/passwordReset`, { // use API_URL
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(data.message || "Password reset link sent successfully!");
        setEmail("");
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Password reset request failed");
      }
    } catch (error) {
      setError("Something went wrong, please try again");
    }
  };

  return (
    <div className="col-md-6 col-lg-4 mx-auto">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4">
          <h2 className="mb-4 text-primary text-center">Password Reset</h2>

          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
