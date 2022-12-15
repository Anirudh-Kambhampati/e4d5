import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import "../../App.scss";
// import ipImg from "../../images/cardIp.png";
import "./InputText.css";
// import StorageUnit from "./StorageUnit";
import { getFolderTree } from "../../redux/folderTree/folderTreeSlice";
import MainFile from "./Files/MainFile";

const RightContent = ({ content = {} }, props) => {
  const folderTree = useSelector(getFolderTree);
  const data = folderTree.children;
  function TextInput({ type = "text", label }) {
    const [value, setValue] = useState("");
    function handleChange(e) {
      setValue(e.target.value);
    }
    return (
      <div className="input-container">
        <input type={type} value={value} onChange={handleChange} />
        <label className={value && "filled"}>{label}</label>
      </div>
    );
  }

  // const handleUploadChange = (e) => {
  //   console.log(e.target.files);
  //   const files = e.target.files;
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   return <div>{files.length}</div>;
  //   // reader.onload(e) => {}
  // };

  const getPath = (object, search) => {
    if (object.id === search) return [object.module];
    else if (object.children || Array.isArray(object)) {
      let children = Array.isArray(object) ? object : object.children;
      for (let child of children) {
        let result = getPath(child, search);
        if (result) {
          if (object.id) result.unshift(object.module);
          return result;
        }
      }
    }
  };

  if (content.id !== undefined) {
    var proj = getPath(data, content.id)[0];
  }
  return (
    <div className="main">
      <div
        className="mt-4"
        style={{
          marginLeft: "100px",
          marginTop: "100px",
          display: "block",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* {content.module === "Storage Unit" && (
        <StorageUnit handleUploadChange={handleUploadChange} />
      )} */}
        {/* Stringify was here */}
        {proj === "Projects" ? (
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              marginLeft: "5rem",
            }}
          >
            <p style={{ color: "#0091EA", marginBottom: "30px" }}>
              {content.module}
            </p>
            {/* <StorageUnit
            handleUploadChange={handleUploadChange}
          /> */}
            <MainFile />
          </div>
        ) : (
          <Card
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <div
              className="h-[80vh] w-[40vw] flex-col-center gap-10 d-block"
              style={{ backgroundColor: "#EDE7F6" }}
            >
              <p
                style={{
                  color: "#7c3aed",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                {content.module}
              </p>
              <form>
                <TextInput label="IP Address" />
                <TextInput label="Instrument Model" />
                <TextInput label="Default Gateway" />
              </form>
              <p style={{ color: "white", display: "flex", padding: "2px" }}>
                <p style={{ color: "#7c3aed", fontWeight: "bold" }}>Status:</p>
                <b style={{ color: "green" }}>Active</b>
              </p>
            </div>
          </Card>
        )}

        {/* <pre>{JSON.stringify(content, undefined, 4)}</pre> */}
      </div>
    </div>
  );
};

export default RightContent;
