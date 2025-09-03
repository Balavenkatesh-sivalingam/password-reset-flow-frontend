import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config"; // import backend URL

function ResetPasswordForm() {
  const { token } = useParams(); // extracting token from the URL
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    try {
      const res = await fetch(
        `${API_URL}/api/users/resetPassword/${token}`, // use API_URL
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        setMessage(data.message || "Password reset successfully!");
        setPassword("");
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Password reset failed");
      }
    } catch (error) {
      setError("Something went wrong, please try again");
    }
  };

  return (
    <div className="col-md-6 col-lg-4 mx-auto">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4">
          <h2 className="mb-4 text-primary text-center">Reset Password</h2>

          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">New Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
