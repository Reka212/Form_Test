import { useState } from "react";

function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔽 [VALIDASI] state error
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔽 [VALIDASI] field wajib
    if (!email || !password) {
      setError("Email dan password wajib diisi");
      return;
    }

    // 🔽 [VALIDASI] format email sederhana
    if (!email.includes("@")) {
      setError("Format email tidak valid");
      return;
    }

    // 🔽 [VALIDASI] panjang password
    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    // 🔽 [VALIDASI] lolos semua
    setError("");
    alert(`Login berhasil\nEmail: ${email}`);
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

        {/* 🔽 [VALIDASI] tampilkan pesan error */}
        {error && (
          <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "93%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "93%", padding: "8px" }}
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
            }}
          >
            Login
          </button>
        </form>

        {/* 🔽 TOMBOL REGISTER */}
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Belum punya akun?{" "}
          <span
            onClick={onSwitch}
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
