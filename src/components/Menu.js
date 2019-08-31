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

import { menu } from "../fakeDb/menu.js";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));
const orderList = {};

// fake datas
const arr_app = [
  "Miso Soup",
  "House Green Salad",
  "Gyoze",
  "Edamame",
  "Harumaki",
  "Seaweed Salad",
  "Agedashi Tofu",
  "Sunomono Salad",
  "Chicken Karage",
  "Soft Shell Crab",
  "Tuna Tataki",
  "Potato Croquette",
  "Tuna Carppachio"
];
const arr_tempura = [
  "Prawn Tempura",
  "Yam Tempura",
  "Vegetable Tempura",
  "Assorted Tempura",
  "Appetizer Tempura",
  "Sweet Potato Tempura"
];
const arr_udon = [
  "Plain Udon",
  "Beef Udon",
  "Chicken Udon",
  "Seafood Udon",
  "Beef Yakiudon",
  "Chicken Yakiudon",
  "Seafood Yakiudon",
  "Nabeyaki Udon"
];
const arr_carte = [
  "Chicken Teriyaki",
  "Beef Teriyaki",
  "Chicken Curry",
  "Beef Curry",
  "Chicken Teriyaki Donburi",
  "Beef Teriyaki Donburi",
  "Sable Fish",
  "Unagi Donburi"
];

const arr_maki = [
  "Kappa Roll",
  "Oshinko Roll",
  "Salmon Roll",
  "Tuna Roll",
  "Negitoro Roll",
  "California Roll",
  "Salmon Avocado Roll",
  "Yam Tempura Roll",
  "BC Roll",
  "Dynamite Roll",
  "Mango Roll",
  "Philadelphia Roll",
  "Unagi Roll",
  "Chopped Scallop Roll",
  "Spicy Salmon Roll",
  "Spicy Tuna Roll"
];

const arr_temaki = [
  "Tuna Cone",
  "Salmon Cone",
  "Chopped Scallop Cone",
  "Spicy Tuna Cone",
  "Spicy Salmon Cone",
  "Spicy Chopped Scallop Cone"
];
const arr_nigiri = [
  "Inari",
  "Tamago",
  "Hokkigai",
  "Wakame",
  "Tuna",
  "Salmon",
  "Sockeye Salmon",
  "Masago",
  "Saba",
  "Ebi",
  "Chopped Scallop",
  "Tobiko",
  "Tai",
  "Ika",
  "Toro",
  "Tobiko & Quall Egg",
  "Smoke Salmon",
  "Tako",
  "Amaebi",
  "Hotategai",
  "Unagi",
  "Ikura",
  "Hamachi",
  "Red Tuna",
  "Uni"
];

const arr_sashimi = [
  "Salmon Sashimi",
  "Tuna Sashimi",
  "Spicy Salmon Sashimi",
  "Spicy Tuna Sashimi",
  "Tuna & Salmon Sashimi",
  "Sockeye Salmon Sashimi",
  "Hokkigai Sashimi",
  "Toro Sashimi",
  "Tako Sashimi",
  "Amaebi Sashimi",
  "Hamachi Sashimi",
  "Assorted Sashimi",
  "Red Tuna Sashimi",
  "Uni Sashimi"
];

const arr_combo = [
  "Party Tray A",
  "Party Tray B",
  "Party Tray C",
  "Spicy Combo"
];

export default function Menu() {
  // Menu Components

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
