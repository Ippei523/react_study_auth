import { Box, Button, Input } from "@mui/material";
import { AuthLayout } from "../../../components/authLayout";

export function Signup() {
  return (
    <AuthLayout
      title="新規登録"
      toggleAuthButtonTitle="ログインへ"
      toggleAuthSubTitle="すでにアカウントをお持ちの方"
      authLayoutType="signup"
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
        <Input
          sx={{ fontSize: "18px" }}
          type="password"
          placeholder="もう一度パスワードを入力してください"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" color="primary">
          ユーザー登録
        </Button>
      </Box>
    </AuthLayout>
  );
}
