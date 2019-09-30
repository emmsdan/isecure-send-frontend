import React from "react";
import Button from "@material-ui/core/Button";
import { Fade, Modal, Backdrop } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

export default function FormDialog({ isOpened, files, formField }) {
  const [open, setOpen] = React.useState(isOpened);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "10px auto",
            background: "white",
            padding: "20px",
            borderRadius: "12px"
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={7}>
              {files}
            </Grid>
            <Grid item xs={5}>
              {formField}
            </Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
}

FormDialog.propTypes = {
  files: PropTypes.element.isRequired,
  formField: PropTypes.element.isRequired,
  isOpened: PropTypes.bool.isRequired
};
