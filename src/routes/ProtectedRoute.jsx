import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("isLogin");

  // BELUM LOGIN → TENDANG KE LOGIN
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  // SUDAH LOGIN → IZINKAN AKSES
  return children;
}

export default ProtectedRoute;
