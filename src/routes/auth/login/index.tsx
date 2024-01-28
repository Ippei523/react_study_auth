import { Alert, Box, Button, Input, Snackbar } from "@mui/material";
import { useAuth } from "../../../context/authContext";
import GoogleLogin from "react-google-login";
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
        toggleAuthButtonTitle="新規登録"
        toggleAuthSubTitle="アカウントをお持ちでない方"
        authLayoutType="login"
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Input type="email" placeholder="メールアドレスを入力してください" />
          <Input type="password" placeholder="パスワードを入力してください" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary">
            ログイン
          </Button>
        </Box>
        <Box
          sx={{ width: "100%", height: "1px", backgroundColor: "#C0C0C0" }}
        ></Box>
        <Box>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Googleアカウントでログイン"
            onSuccess={() => {}}
            onFailure={() => {}}
            cookiePolicy={"single_host_origin"}
          />
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
