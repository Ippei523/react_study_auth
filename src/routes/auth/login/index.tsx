import { Alert, Box, Button, Input, Snackbar } from "@mui/material";
import { useAuth } from "../../../context/authContext";
import { AuthLayout } from "../../../components/authLayout";

export function Login() {
  const { missToken, setMissToken } = useAuth();
  function handleClose() {
    setMissToken(false);
  }
  return (
    <>
      <AuthLayout
        title="ログイン"
        toggleAuthButtonTitle="新規登録へ"
        toggleAuthSubTitle="アカウントをお持ちでない方"
        authLayoutType="login"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Input
            sx={{ fontSize: "18px" }}
            type="email"
            placeholder="メールアドレスを入力してください"
          />
          <Input
            sx={{ fontSize: "18px" }}
            type="password"
            placeholder="パスワードを入力してください"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary">
            ログイン
          </Button>
        </Box>
      </AuthLayout>
      {missToken && (
        <Snackbar open={true} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            ログインまたはユーザー登録からやり直してください
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
