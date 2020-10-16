import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "fit-content",
  },
}));

const User = ({ name }) => {
  const classes = useStyles();

  return (
    <div className={`p-1 ${classes.root}`}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image="https://picsum.photos/300/200"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className="text-center mb-0"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default User;
