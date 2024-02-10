import React, { useState } from "react";
import { Alert, Box, Button, Input, Typography, Snackbar } from "@mui/material";
import { AuthLayout } from "../../../components/authLayout";
import axios from "axios";
import { apiUrl } from "../../../constants";
import { useForm, SubmitHandler, Form, FieldError } from "react-hook-form";

type RegisterForm = {
  email: string | FieldError;
  password: string | FieldError;
  passwordConfirmation: string | FieldError;
};

export function Signup() {
  const [showAlert, setShowAlert] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    shouldFocusError: true,
  });

  const submitForm: SubmitHandler<input> = async (data) => {
    try {
      const response = await axios.post(`${apiUrl}users/`, data);
      console.log(response);
    } catch (error) {
      console.error(error.response.data.message);
      setShowAlert(error.response.data.message);
    }
  };

  const handleClose = () => {
    setShowAlert("");
  };

  return (
    <AuthLayout
      title="新規登録"
      toggleAuthButtonTitle="ログインへ"
      toggleAuthSubTitle="すでにアカウントをお持ちの方"
      authLayoutType="signup"
    >
      <Form onSubmit={handleSubmit(submitForm)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Box>
            <Input
              sx={{ fontSize: "18px", width: "100%" }}
              type="email"
              placeholder="メールアドレスを入力してください"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "正しいメールアドレスを入力してください",
                },
              })}
            />
            <Typography sx={{ color: "red" }}>
              {errors.email && errors.email.message}
            </Typography>
          </Box>

          <Box>
            <Input
              sx={{ fontSize: "18px", width: "100%" }}
              type="password"
              placeholder="パスワードを入力してください"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "8文字以上で入力してください",
                },
              })}
            />
            <Typography sx={{ color: "red" }}>
              {errors.password && errors.password.message}
            </Typography>
          </Box>

          <Box>
            <Input
              sx={{ fontSize: "18px", width: "100%" }}
              type="password"
              placeholder="もう一度パスワードを入力してください"
              {...register("passwordConfirmation", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "パスワードが一致しません",
              })}
            />
            <Typography sx={{ color: "red" }}>
              {errors.passwordConfirmation &&
                errors.passwordConfirmation.message}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="primary" type="submit">
              ユーザー登録
            </Button>
          </Box>
        </Box>
      </Form>
      {showAlert && (
        <Snackbar open={true} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {showAlert}
          </Alert>
        </Snackbar>
      )}
    </AuthLayout>
  );
}
