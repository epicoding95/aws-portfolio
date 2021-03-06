import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ComputerIcon from '@material-ui/icons/Computer';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from "react-router-dom";
import { ThemeContext } from '../contexts/ThemeContext';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        padding: '0',
        display: 'none',

        '@media (max-width: 400px)': {
            // width: "60%",
            display: "block"
        }
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        background: 'green'
    },
    drawerOpen: {
        width: '155px',
        fontFamily: 'Raleway, sans-serif',
        background: 'linear-gradient(90deg, #fdfbfb,  #ebedee);',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerOpenDark: {
        width: '155px',
        fontFamily: 'Raleway, sans-serif',
        background: 'black',
        color: '#ddd',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        background: 'linear-gradient(90deg, #fdfbfb,  #ebedee);',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    drawerCloseDark: {
        background: 'black',
        color: '#ddd',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    MenuIcon: {
        width: '100px',
        height: '100px'
    },
    SocialMediaLinks: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignitems: 'center',
        marginTop: '150px',
        marginLeft: '10px'
    },
    paper: {
        background: 'linear-gradient(90deg, #fdfbfb,  #ebedee);',
        color: 'black'
    },
    darkPaper: {
        background: 'black',
        color: 'white'
    }
}));

const MiniDrawer = () => {
    const { themeColor } = useContext(ThemeContext)
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const handleDrawerOpen = () => {
    //     setOpen(!open);
    // };

    const handleDrawerClose = () => {
        setOpen(!open);
    };

    const history = useHistory();

    function handleProjects() {

        history.push("/Projects");
    }
    //this is for the being worked on about page
    // function handleAbout() {

    //     history.push("/About");
    // }
    function handleContact() {

        history.push("/ContactForm");
    }
    function handleHome() {
        history.push('/')

    }
    console.log(themeColor, 'themecolor in sidedrawer')
    return (
        <div className={classes.root} >
            <Drawer
                variant="permanent"
                // className={clsx(classes.drawer, {
                //     [classes.drawerOpen]: open,
                //     [classes.drawerClose]: !open,
                // })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open && !themeColor,
                        [classes.drawerClose]: !open && !themeColor,
                        [classes.drawerOpenDark]: open && themeColor,
                        [classes.drawerCloseDark]: !open && themeColor,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction !== 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List style={{ marginLeft: '10px' }}>
                    <ListItem button onClick={() => handleHome()}>
                        <HomeIcon />
                        <ListItemText primary='Home' style={{ marginLeft: '35px' }} />
                    </ListItem>
                    <ListItem button onClick={() => handleProjects()}>
                        <ComputerIcon />
                        <ListItemText primary='Projects' style={{ marginLeft: '35px' }} />
                    </ListItem>
                    <ListItem button onClick={() => handleContact()}>
                        <EmailIcon />
                        <ListItemText primary='Email' style={{ marginLeft: '35px' }} />
                    </ListItem>
                </List>
                <Divider />
                <div className={classes.SocialMediaLinks}>
                    <List>
                        <ListItem button>
                            <GitHubIcon onClick={() => window.location.href = 'https://github.com/epicoding95'} />
                        </ListItem>
                        <ListItem button>
                            <LinkedInIcon onClick={() => window.location.href = 'https://www.linkedin.com/in/kelarcrisp/'} />
                        </ListItem>
                        <ListItem button>
                            <InstagramIcon onClick={() => window.location.href = 'https://www.instagram.com/theekilla/'} />
                        </ListItem>
                        <ListItem button>
                            <TwitterIcon onClick={() => window.location.href = 'https:twitter.com/theekillaa'} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default MiniDrawer