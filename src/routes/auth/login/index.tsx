import { Alert, Box, Snackbar } from "@mui/material";
import { useAuth } from "../../../context/authContext";

export function Login() {
  const { missToken, setMissToken } = useAuth();
  function handleClose() {
    setMissToken(false);
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh", gap: "10px" }}>
      <h1>Login</h1>

      {
        missToken && (
          <Snackbar
            open={true}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              ログインまたはユーザー登録からやり直してください
            </Alert>
          </Snackbar>
        )
      }
    </Box>
  )
}