import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SearchBar from './SearchBar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
    textDecoration: "none",
  },
  title: {
    flexGrow: 1,
    display: 'none',
    textDecoration: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navColor: {
    background: 'white',
    // boxShadow: 'none'
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navColor}>
        <Toolbar>
        
          <Button>
            <NavLink to="/" className={classes.menuButton} style={{fontFamily: 'papyrus', color: 'red', fontWeight: 'bold', fontSize: 20}}>Shoein</NavLink>
          </Button>
          
         
        <Typography variant="h6" noWrap>
        <Button>
       <NavLink to="/brands" className={classes.menuButton}>Brands</NavLink>
       </Button>
       </Typography>
       
       <Typography  variant="h6" noWrap>
       <Button>
         <NavLink to="/shoes" className={classes.menuButton}>Shoes</NavLink>
         </Button>
         </Typography>

         <Typography  className={classes.title} variant="h6" noWrap>
         <Button>
         <NavLink to="/shoes/new" className={classes.menuButton}>Create Shoe</NavLink>
         </Button>
         </Typography>
         <SearchBar/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;