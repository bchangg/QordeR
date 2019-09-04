import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { navigate } from 'hookrouter';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

/*props
 * title: STRING
 * admin: BOOLEAN
 */

export default function TopBar(props) {
  const classes = useStyles();

  const [cookies, setCookie, removeCookie] = useCookies('user');

  function logout() {
    axios.post('/logout')
      .then((response) => {
        removeCookie('user');
        navigate(response.data)
      })
  }

  return (
    <div className={classes.root}>
      <AppBar position={classes.static}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          {props.admin && <Button onClick={logout} color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
