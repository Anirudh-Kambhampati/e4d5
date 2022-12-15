import React from "react";
import { Button } from "@mui/material";
import { logout } from "../../utils/auth";

const Logout = () => {
  return (
    <div>
      <Button
        variant="outlined"
        color="warning"
        size="small"
        onClick={() => logout()}
        sx={{
          textTransform: "none",
          bottom: 10,
          left: 10,
          position: "absolute",
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
