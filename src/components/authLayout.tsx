import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type AuthLayoutType = "login" | "signup";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  toggleAuthButtonTitle: string;
  toggleAuthSubTitle: string;
  authLayoutType: AuthLayoutType;
}

export function AuthLayout({
  children,
  title,
  toggleAuthButtonTitle,
  toggleAuthSubTitle,
  authLayoutType,
}: LayoutProps) {
  const router = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        gap: "10px",
      }}
    >
      <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "35%",
          border: "1px solid blue",
          padding: "60px 25px",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "space-between",
          width: "35%",
        }}
      >
        <Typography>{toggleAuthSubTitle}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            if (authLayoutType === "login") {
              router("/auth/signup");
            } else {
              router("/auth/login");
            }
          }}
        >
          {toggleAuthButtonTitle}
        </Button>
      </Box>
    </Box>
  );
}
