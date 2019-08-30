import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";
// import Item from "./Item.js"
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
  // const categories = ["Appetizer", "Tempura", "Udon", "Carte", "Maki", "Temaki", "Nigiri", "Sashimi", "Combination"];
  const [appetizer, setAppetizer] = React.useState(false);
  // const [tempura, setTempura] = React.useState(false);
  // const [udon, setUdon] = React.useState(false);
  // const [carte, setCarte] = React.useState(false);
  // const [maki, setMaki] = React.useState(false);
  // const [temaki, setTemaki] = React.useState(false);
  // const [nigiri, setNigiri] = React.useState(false);
  // const [sashimi, setSashimi] = React.useState(false);
  // const [combination, setCombination] = React.useState(false);

  const menuList = menu.map((categoryName) => {
    return (
      <ListItem button onClick={() => state === categoryName ? setState(null) : setState(categoryName)}>
          <InboxIcon />
        <ListItemText primary={categoryName} />
        {categoryName === state ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
    )
  })

  console.log(menuList);


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
// <ListItem button onClick={() => setAppetizer(!appetizer)}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText primary="Appetizer" />
//   {appetizer ? <ExpandMore /> : <ExpandLess />}
// </ListItem>
// <Collapse in={appetizer} timeout="auto" unmountOnExit>
//   {arr_app.map((value) => {
//       return <Item name={value}/>
//    })}
// </Collapse>
//
// <ListItem button onClick={() => setTempura(!tempura)}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText primary="Tempura" />
//   {tempura ? <ExpandMore /> : <ExpandLess />}
// </ListItem>
// <Collapse in={tempura} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//       {arr_tempura.map((value) => {
//       return <Item name={value}/>
//    })}
//   </List>
// </Collapse>
// <ListItem button onClick={() => setUdon(!udon)}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText primary="Udon" />
//   {udon ? <ExpandMore /> : <ExpandLess />}
// </ListItem>
// <Collapse in={udon} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//       {arr_udon.map((value) => {
//           return <Item name={value}/>
//       })}
//   </List>
// </Collapse>
// <ListItem button onClick={() => setCarte(!carte)}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText primary="Carte" />
//   {carte ? <ExpandMore /> : <ExpandLess />}
// </ListItem>
// <Collapse in={carte} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//       {arr_carte.map((value) => {
//           return <Item name={value}/>
//       })}
//   </List>
// </Collapse>
// <ListItem button onClick={() => setMaki(!maki)}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText primary="Maki" />
//   {maki ? <ExpandMore /> : <ExpandLess />}
// </ListItem>
// <Collapse in={maki} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//       {arr_maki.map((value) => {
//           return <Item name={value}/>
//       })}
//   </List>
// </Collapse>
// <ListItem button onClick={() => setTemaki(!temaki)}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText primary="Temaki" />
//   {temaki ? <ExpandMore /> : <ExpandLess />}
// </ListItem>
// <Collapse in={temaki} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//       {arr_temaki.map((value) => {
//           return <Item name={value}/>
//       })}
//   </List>
// </Collapse>
// <ListItem button onClick={() => setNigiri(!nigiri)}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText primary="Nigiri" />
//   {nigiri ? <ExpandMore /> : <ExpandLess />}
// </ListItem>
// <Collapse in={nigiri} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//       {arr_nigiri.map((value) => {
//           return <Item name={value}/>
//       })}
//   </List>
// </Collapse>
// <ListItem button onClick={() => setSashimi(!sashimi)}>
//   <ListItemIcon>
//     <InboxIcon />
//   </ListItemIcon>
//   <ListItemText primary="Sashimi" />
//   {sashimi ? <ExpandMore /> : <ExpandLess />}
// </ListItem>
// <Collapse in={sashimi} timeout="auto" unmountOnExit>
//   <List component="div" disablePadding>
//       {arr_sashimi.map((value) => {
//           return <Item name={value}/>
//       })}
//   </List>
// </Collapse>
//   <ListItem button onClick={() => setCombination(!combination)}>
//     <ListItemIcon>
//       <InboxIcon />
//     </ListItemIcon>
//     <ListItemText primary="Combination" />
//     {combination ? <ExpandMore /> : <ExpandLess />}
//   </ListItem>
//   <Collapse in={combination} timeout="auto" unmountOnExit>
//     <List component="div" disablePadding>
//         {arr_combo.map((value) => {
//             return <Item name={value}/>
//         })}
//     </List>
//   </Collapse>