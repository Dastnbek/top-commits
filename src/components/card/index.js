import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  btn: {
    borderColor: "red",
  },
  contr: {
    fontWeight: 600,
  },
}));
const CustomCard = (props) => {
  const classes = useStyles();
  const { name, company, contributions, img, rank } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={img}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <span className={classes.contr}>{contributions}</span>
          </IconButton>
        }
        title={`#${rank} ${name}`}
        subheader={company}
      />
    </Card>
  );
};

export default CustomCard;
