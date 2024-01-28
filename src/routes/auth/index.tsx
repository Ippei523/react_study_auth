import { Alert, Snackbar } from "@mui/material";
import { useAuth } from "../../context/authContext";

export function Auth() {
  const { missToken, setMissToken } = useAuth();
  function handleClose() {
    setMissToken(false);
  }

  return (
    <>
      <h1>ログイン・ユーザー登録</h1>
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
    </>
  )
}