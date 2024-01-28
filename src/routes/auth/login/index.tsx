import { Alert, Box, Input, Snackbar, Typography } from "@mui/material";
import { useAuth } from "../../../context/authContext";

export function Login() {
  const { missToken, setMissToken } = useAuth();
  function handleClose() {
    setMissToken(false);
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh", gap: "10px" }}>
      <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>Login</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", width: "40%", gap: "20px", border: "1px solid blue", padding: "40px 20px" }}>
        <Input type="email" placeholder="メールアドレスを入力してください" />
        <Input type="password" placeholder="パスワードを入力してください" hidden />
      </Box>
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