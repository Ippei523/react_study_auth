import { Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: "flex", width: "70%", alignItems: "center", justifyContent: "center", margin: "0px auto" }}>
      { children }
    </Box>
  )
}