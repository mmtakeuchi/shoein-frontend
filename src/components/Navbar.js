import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    variant: "outlined",
    borderColor: 'secondary-main',
    color: "secondary-main",
    borderStyle: 'solid',
    backgroundColor: fade(theme.palette.background.paper, 0.15),
    '&:hover': {
      borderColor: fade(theme.palette.info.dark, 0.25),
      backgroundColor: fade(theme.palette.background.paper, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey'
  },
  inputRoot: {
    color: 'black',
  },
  navColor: {
    background: 'white',
    // boxShadow: 'none'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navColor}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}

        
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
         
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;