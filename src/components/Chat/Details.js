import React from "react";
import { Typography, Divider, IconButton } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Details = () => {
  return (
    <div>
      <div className="p-2 d-flex justify-content-between align-items-center">
        <Typography variant="h5" color="initial">
          Lorem
        </Typography>

        <IconButton type="submit" aria-label="search">
          <InfoOutlinedIcon />
        </IconButton>
      </div>
      <Divider />
    </div>
  );
};

export default Details;
