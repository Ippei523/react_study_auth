import { Typography } from "@mui/material";
import { useAuth } from "../../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export function Home() {
  const { token } = useAuth();
  if (!token) {
    alert('ログインからやり直してください');
    return <Navigate to="/auth" />
  }

  return (
    <>
      <Typography variant="h1">Home</Typography>
      <Outlet />
    </>
  )
}