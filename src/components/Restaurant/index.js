import React, { useState, useEffect, Fragment } from 'react';
import TopBar from "components/TopBar";
import { navigate } from 'hookrouter';
import { useCookies } from 'react-cookie';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import MenuEdit from 'components/Restaurant/MenuEdit/index';
import TableOrder from 'components/Restaurant/TableOrder';
import Tables from 'components/Restaurant/Tables';

const axios = require('axios');

const TABLES = "TABLES";
const EDIT = "EDIT";

const useStyles = makeStyles(theme => ({
  list: {
    width: '40vw',
    margin: 'auto'
  },
  order: {
    width: '90vw',
    margin: 'auto'
  },
  progress: {
    margin: theme.spacing(2),
  },
}))

export default function Restaurant(props) {
  const [state, setState] = useState({
    show: TABLES,
    tables: [],
    orderItems: {
      incomplete: null,
      data: []
    },
  })

  const [cookies] = useCookies(['user']);
  const [currentTable, setCurrentTable] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    if (!cookies.user || cookies.user !== props.restoId) {
      navigate(`/admin`);
    }
  }, []);

  useEffect(() => {
    axios.get(`/api/getTables/${props.restoId}`)
      .then((response) => {
        setState((currentState) => {
          return ({
            ...currentState,
            tables: response.data
          });
        });
      })
      .catch((error) => {
        setState((currentState) => {
          return ({
            ...currentState
          });
        });
      });
  }, []);

  useEffect(() => {
    setState((currentState) => {
      return ({
        ...currentState,
        orderItems: []
      });
    });
    axios.get(`/api/getActiveTableItems/${currentTable}`)
      .then((response) => {
        console.log(response.data);
        setState((currentState) => {
          return ({
            ...currentState,
            orderItems: {
              incomplete: Array.isArray(response.data) && response.data.filter((entry) => {
                return !entry.time_completed;
              }).length,
              data: response.data
            }
          });
        });
      });
  }, [currentTable]);

  const renderTablePage = function() {
    return (
      <div class="d-flex flex-column justify-content-between">
        <Tables incomplete={state.orderItems.incomplete} currentTable={currentTable} setCurrentTable={setCurrentTable} tables={state.tables} classes={classes}/>
        <br/>
        {currentTable && <TableOrder currentTable={currentTable} orderItems={state.orderItems} classes={classes}/>}
      </div>
    )
  };

  return (
    <Fragment>
      <TopBar title="All Orders" admin/>
      <br/>
      <br/>
      <br/>
      <div className="text-center">
        <Button onClick={() => setState(current => ({...current, show: TABLES}))}>Tables</Button> | <Button onClick={() => setState(current => ({...current, show: EDIT}))}>Edit Menu</Button>
      </div>
      <div className="text-center">
        {state.show === TABLES && renderTablePage()}
        {state.show === EDIT && <MenuEdit restaurantId={props.restoId}/>}
      </div>
    </Fragment>
  )
}