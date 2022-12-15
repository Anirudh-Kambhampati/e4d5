import React, { useCallback, useState, useEffect } from "react";

import Card from "../../../components/Card/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import cuid from "cuid";
import Dropzone from "./Dropzone";
import ImageGrid from "./ImageGrid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./files.scss";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MainFile() {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const notify = () =>
    toast(<span>Sending Feedback!</span>, {
      position: toast.POSITION.TOP_CENTER,
    });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [{ items }, setItems] = useState({ items: [] });
  const addItem = () => {
    items.push(
      <div key={items.length}>
        <Card>Dear User</Card>
      </div>
    );
    setItems({ items: [...items] });
  };

  return (
    <main className="App">
      <Dropzone onDrop={onDrop} accept={"image/*"} />
      <ImageGrid images={images} />
      <Button onClick={handleOpen}>Upload</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Dear User,</Typography>
          <Typography>
            Please adjust the following parameters for a better DICE score
          </Typography>
          <Typography>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Resize</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="250px"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="100px"
                  control={<Radio />}
                  label="100px"
                />
                <FormControlLabel
                  value="250px"
                  control={<Radio />}
                  label="250px"
                />
                <FormControlLabel
                  value="500px"
                  control={<Radio />}
                  label="500px"
                />
              </RadioGroup>
              <TextField
                placeholder="Please Enter the Image size"
                style={{ width: "125%" }}
              ></TextField>
            </FormControl>
            <Typography sx={{ mt: 2 }}>
              <button onClick={notify}>Send Analysis</button>
            </Typography>
          </Typography>
          <ToastContainer />
        </Box>
      </Modal>

      {items}
    </main>
  );
}

export default MainFile;

// const [show, hide] = useState(false);
// useEffect(() => {
//   const notify = () =>
//     toast(<Card>Anirudh</Card>, { position: toast.POSITION.TOP_CENTER });
//   notify();
// }, []);
