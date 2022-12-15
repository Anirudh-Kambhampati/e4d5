import { Button } from "@mui/material";
import React from "react";
import { logout } from "../../utils/auth";
import logo from "../../images/logo.png";
import { FolderTree } from "../FolderTree/FolderTree";
import Researchers from "./Researchers";
import Users from "./Users";
import Collaborators from "./Collaborators";

function Sidebar({
  handleClick,
  treeData,
  isAdmin = false,
  isResearcer = false,
  errorMsg = "Provide treeData",
  disableRightClick = false,
  disableFileAndFolderAddition = false,
}) {
  return (
    <div className="sidebar sticky top-0 ">
      <h1
        style={{
          fontSize: "30px",
          left: "5rem",
          top: "5px",
          position: "absolute",
        }}
      >
        RISE
      </h1>
      <img
        src={logo}
        alt=""
        style={{ width: "20%", right: "1px", position: "absolute", top: "1px" }}
      />
      <div>
        <div style={{ paddingBottom: "40px" }}>
          <div className="folderTree">
            <FolderTree
              treeData={treeData}
              handleClick={handleClick}
              isAdmin={isAdmin}
              isResearcer={isResearcer}
              errorMsg={errorMsg}
              disableRightClick={disableRightClick}
              disableFileAndFolderAddition={disableFileAndFolderAddition}
            />
            {isAdmin ? (
              <div className="mt-5 flex-col-center gap-4 items-start">
                <Researchers />
                <Users />
                <Collaborators />
              </div>
            ) : isResearcer ? (
              <div className="mt-5 flex-col-center gap-4 items-start">
                <Collaborators />
              </div>
            ) : null}
          </div>
          <Button
            variant="outlined"
            size="small"
            onClick={() => logout()}
            sx={{
              textTransform: "none",
              bottom: 40,
              left: 10,
              position: "absolute",
            }}
            style={{
              backgroundColor: "#E0E0E0",
              color: "#000",
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
