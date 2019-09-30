import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./component.scss";

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}
const ListUploadFIle = () => {
  return (
    <div>
      <List dense={false}>
        {generate(
          <ListItem>
            <ListItemAvatar>
              <Avatar className="avater">
                <span className="file-icon">pdf</span>
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Financial_details.pdf"
              secondary="50.99mb"
              className="default-text"
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <HighlightOffIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}

        <Button
          variant="contained"
          size="large"
          className="button"
          style={{ left: "30%" }}
        >
          Add file
        </Button>
      </List>
    </div>
  );
};

export default ListUploadFIle;
