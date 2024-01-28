import { Typography } from "@mui/material";
import { useAuth } from "../../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export function Home() {
  const { token, setMissToken } = useAuth();
  if (!token) {
    setMissToken(true);
    return <Navigate to="/auth/login" />
  }

  return (
    <>
      <Typography variant="h1">Home</Typography>
      <Outlet />
    </>
  )
}