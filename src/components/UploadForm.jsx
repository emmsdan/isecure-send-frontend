import React from "react";
import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { FormHelperText } from "@material-ui/core";

const UploadForm = () => {
  const [select, setSelector] = React.useState({
    expiresIn: "5m",
    downloadsAllowed: 1
  });
  const handleDownloadsAllowed = event => {
    setSelector({ ...select, downloadsAllowed: event.target.value });
  };
  const handleExpiresIn = event => {
    setSelector({ ...select, expiresIn: event.target.value });
  };
  return (
    <div>
      <TextField
        id="sender_name"
        label="Full name (optional)"
        type="text"
        fullWidth={true}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="sender_email"
        label="Your Email"
        type="email"
        fullWidth={true}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="receiver_email"
        label="Receiver's Email"
        type="email"
        fullWidth={true}
        margin="normal"
        variant="outlined"
      />
      <FormControl required fullWidth={true}>
        <InputLabel htmlFor="expires_in-required">Expires In</InputLabel>
        <Select
          value={select.expiresIn}
          onChange={handleExpiresIn}
          name="expires_in"
          labelWidth={20}
          inputProps={{
            id: "expires_in-required"
          }}
          className="select"
        >
          <MenuItem value="5m">5 mins</MenuItem>
          <MenuItem value="1h">1 hour</MenuItem>
          <MenuItem value="12h">12 hours</MenuItem>
          <MenuItem value="1d">1 day</MenuItem>
          <MenuItem value="3d">3 days</MenuItem>
          <MenuItem value="5d">5 days</MenuItem>
          <MenuItem value="7d">7 days</MenuItem>
        </Select>
      </FormControl>
      <FormControl required fullWidth={true}>
        <InputLabel htmlFor="downloads_allowed-required">
          No of Downloads Allowed
        </InputLabel>
        <Select
          value={select.downloadsAllowed}
          onChange={handleDownloadsAllowed}
          name="downloads_allowed"
          labelWidth={20}
          inputProps={{
            id: "downloads_allowed-required"
          }}
          className="select"
        >
          <MenuItem value={1}>1 download</MenuItem>
          <MenuItem value={10}>10 downloads</MenuItem>
          <MenuItem value={15}>15 downloads</MenuItem>
          <MenuItem value={20}>20 downloads</MenuItem>
          <MenuItem value={25}>25 downloads</MenuItem>
          <MenuItem value={50}>50 downloads</MenuItem>
          <MenuItem value={100}>10 downloads</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormHelperText id="component-helper-text">
        Regardless of Download limit, all files are removed from the system
        after <b>& days of upload</b>
      </FormHelperText>
      <br />

      <Button variant="contained" size="large" className="button" fullWidth>
        Encrypt and Send FIles
      </Button>
    </div>
  );
};

export default UploadForm;
