import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔽 [NAVIGATE] import

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 const labelStyle = {
  display: "block",
  textAlign: "left",
  marginBottom: "4px",
};
  // 🔽 [VALIDASI] state error
  const [error, setError] = useState("");

  const navigate = useNavigate(); // 🔽 [NAVIGATE] init

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔽 [VALIDASI] field wajib
    if (!name || !email || !password || !confirmPassword) {
      setError("Semua field wajib diisi");
      return;
    }

    // 🔽 [VALIDASI] nama minimal 3 karakter
    if (name.length < 3) {
      setError("Nama minimal 3 karakter");
      return;
    }

    // 🔽 [VALIDASI] format email (regex sederhana)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Format email tidak valid");
      return;
    }

    // 🔽 [VALIDASI] password minimal 8 karakter
    if (password.length < 8) {
      setError("Password minimal 8 karakter");
      return;
    }

    // 🔽 [VALIDASI] password harus mengandung huruf & angka
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)/;
    if (!passwordRegex.test(password)) {
      setError("Password harus mengandung huruf dan angka");
      return;
    }

    // 🔽 [VALIDASI] konfirmasi password
    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak sama");
      return;
    }

    // 🔽 [VALIDASI] lolos semua
    setError("");

    // 🔽 [NAVIGATE] simulasi register sukses
    alert(`Register berhasil\nNama: ${name}\nEmail: ${email}`);
    navigate("/login"); // 👉 redirect ke login
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
          width: "350px",
          padding: "20px",
          backgroundColor: "#2a2a2a",
          borderRadius: "8px",
          color: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Register
        </h2>

        {/* 🔽 [VALIDASI] tampilkan error */}
        {error && (
          <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
           <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
          <label style={labelStyle}>Konfirmasi Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            Register
          </button>
        </form>

        {/* 🔽 [NAVIGATE] TOMBOL BALIK KE LOGIN */}
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Sudah punya akun?{" "}
          <span
            onClick={() => navigate("/login")} // 🔽 [NAVIGATE]
            style={{ color: "#4da6ff", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
