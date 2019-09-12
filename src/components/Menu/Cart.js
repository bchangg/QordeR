import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";
import ArrowBack from '@material-ui/icons/ArrowBack';

const calculatePrice = function(price, quantity) {
  return (price * quantity).toFixed(2)
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 10
  }
}))(TableCell);

const useStyles2 = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(2)
  },
  table: {
    minWidth: 50,
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

function incrementer(name, order, row) {
  let i = document.getElementById(name);
  let price = document.getElementById(`${name}price`);
  i.value++;
  order[name].quantity = i.value;
  row["quantity"] = i.value;
  price.innerText = calculatePrice(Number(price.innerText) / (Number(i.value) - 1), i.value)
}

function decrementer(name, order, row) {
  let i = document.getElementById(name);
  let price = document.getElementById(`${name}price`);
  if (i.value > 1) {
    i.value--;
    order[name].quantity = i.value;
    row["quantity"] = i.value;
    price.innerText = calculatePrice(Number(price.innerText) / (Number(i.value) + 1), i.value)
  }
}
export default function Cart(props) {
  const deleteItem = function(index) {
    delete props.order[props.rows[index].name]
    let result = props.rows.filter(row => row.name !== props.rows[index].name)
    props.setRows(result);
    props.setOrderLength(props.orderLength - 1)
  }
  const clear = function() {
    props.setRows([])
    for (let item in props.order) delete props.order[item];
    props.setOrderLength(0)
  }
  const classes = useStyles2();
  return (
    <div>
      <br/>
      <br/>
      <div>
        <ArrowBack
          onClick={() => props.setCart(false)}
          style={{width:"30px", float:"left", position:"absolute"}}
        />
      <div align="center">
        <h2 style={{width:"100%", display:"inline-block", marginBottom:"0px", marginTop:"10px"}}>My Cart</h2>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <TableHead style={{padding:"0px",width:"25%"}}>
                <TableRow>
                  <StyledTableCell style={{padding:"0px",width:"25%", height:"10%"}}></StyledTableCell>
                  <StyledTableCell style={{padding:"0px",width:"25%", height:"10%", paddingLeft:"10px"}}>Item</StyledTableCell>
                  <StyledTableCell style={{padding:"0px",width:"25%", height:"10%", paddingLeft:"10px"}}>Quantity</StyledTableCell>
                  <StyledTableCell style={{padding:"0px",width:"25%", height:"10%", paddingLeft:"10px"}}>Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(row => (
                    <TableRow key={row.name}>
                      <TableCell style={{padding:"0px",width:"25%", height:"10%"}}>
                        <Button onClick={() => deleteItem(props.rows.indexOf(row))}>x</Button>
                      </TableCell>
                      <TableCell style={{padding:"0px",width:"25%", height:"10%"}} component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell style={{padding:"0px",width:"25%", height:"10%"}}>
                          <input
                            type="text"
                            value="-"
                            id="btnDecrement"
                            onClick={() => decrementer(row.name, props.order, row)}
                            style={{paddingTop:"10px", paddingLeft:"10px", backgroundColor:"white", borderStyle:"none"}}
                          />
                          <input
                            type="text"
                            readOnly="readOnly"
                            id={row.name}
                            value={row.quantity}
                            style={{width:"20px", paddingTop:"12px", paddingLeft:"0px", backgroundColor:"white", borderStyle:"none"}}
                          />
                          <input
                            type="text"
                            value="+"
                            id="btnIncrement"
                            onClick={() => incrementer(row.name, props.order, row)}
                            style={{paddingTop:"10px", paddingLeft:"0px"}}
                          />
                      </TableCell>
                      <TableCell id={`${row.name}price`}style={{padding:"0px",width:"25%", height:"10%"}}>{calculatePrice(row.price, row.quantity)}</TableCell>
                    </TableRow>
                  ))}
                {/* {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )} */}
              </TableBody>
            </Table>
          </div>
        </Paper>
        <Button onClick={() => clear()}>Clear Cart</Button>
      </div>
      </div>
        <Button style={{color:"white",
          width:"100%",
          backgroundColor:"#3f51b5",
          position:"fixed",
          bottom:"0"
          }} onClick={() => props.sendOrder(props.rows)}>Place Order</Button>
    </div>
  );
}