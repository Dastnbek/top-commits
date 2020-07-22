import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  btn: {
    borderColor: "red",
  },
  contr: {
    fontWeight: 600,
  },
}));
const CustomCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://avatars2.githubusercontent.com/u/4734297?v=4"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <span className={classes.contr}>1712</span>
          </IconButton>
        }
        title="InadullaevMakhmudjon"
        subheader="Inha University in Tashkent"
      />
    </Card>
  );
};

export default CustomCard;
