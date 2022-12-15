import React from "react";
import RightContent from "./RightContent";
import Chart from "../../components/Chart/Chart";
import { useSelector } from "react-redux";
import { getSelectedNode } from "../../redux/folderTree/folderTreeSlice";

const AdminPage = ({
  isLoggedIn: userData,
  isAdministrator = false,
  isResearcher = false,
}) => {
  const selectedNode = useSelector(getSelectedNode);
  // console.log(selectedNode);
  return (
    <div className="flex gap-5">
      <div className={isAdministrator ? "hidden" : ""}>
        <RightContent content={selectedNode} />
        {/* <Chart content="" /> */}
      </div>
      <div className={!isAdministrator ? "hidden" : "block pb-20"}>
        <div className="flex items-center justify-center gap-5">
          <Chart content="" />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
