import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const labelStyle = {
  display: "block",
  textAlign: "left",
  marginBottom: "4px",
};



  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDASI WAJIB
    if (!email || !password) {
      setError("Email dan password wajib diisi");
      return;
    }

    // VALIDASI EMAIL
    if (!email.includes("@")) {
      setError("Format email tidak valid");
      return;
    }

    // VALIDASI PASSWORD
    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    // LOGIN SUKSES
    setError("");

    // 🔐 SIMPAN STATUS LOGIN
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("email", email); // optional

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1f1f1f",
      }}

    >
      <div
        style={{
          width: "320px",
          padding: "20px",
          backgroundColor: "#2a2a2a",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>

        {error && (
          <p style={{ color: "red", textAlign: "left", fontSize: "14px" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
           <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
          <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Belum punya akun?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ color: "#4da6ff", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
