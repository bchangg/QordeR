import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";
import Item from "./Item.js"
// import './Menu.css'

import { menu } from "../fakeDb/fake_menu.js";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
}));

export default function Menu() {
  const classes = useStyles();
  const [state, setState] = useState([]);

  const menuList = menu.map((category) => {
    return (
      <Fragment>
        <ListItem button onClick={() => state === category.name ? setState(null) : setState(category.name)}>
            <InboxIcon />
          <ListItemText primary={category.name} />
          {category.name === state ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={state === category.name} timeout="auto" unmountOnExit>
          {category.items.map((item) => {
            return <Item name={item}/>
          })}
        </Collapse>
      </Fragment>
    )
  })

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
      className={classes.root}
    >
    {menuList}
    </List>
  );
}
