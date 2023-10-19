import { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import iconCart from "../../assets/icon-cart.svg";
import avatar from "../../assets/avatar.svg";
import "./topNavBar.css";
import CartModal from "../Cart/CartModal";
import { cartContext } from "../../context/cartContext";

const drawerWidth = 240;
const navItems = ["Collection", "Men", "Women", "About", "Contact"];

function TopNavBar(props) {
  const { window } = props;
  const [cartOpen, setCartOpen] = useState(false);
  const [cartAnchor, setCartAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const { cartQuantity } = useContext(cartContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCartOpen = (event) => {
    event.preventDefault();
    setCartAnchor(event.currentTarget);
    setCartOpen(true);
  };

  const handleActiveLinkChange = (value) => {
    setTimeout(() => {
      setActiveLink(value);
    }, 100);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <div className='drawer-close'>
        <IconButton className='icon-button'>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
      className='navbar-container'>
      <CssBaseline />
      <AppBar component='nav' className='navbar'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className='icon-button'
            sx={{ ml: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <div className='navbar-content'>
            <div className='navbar-left'>
              <div className='navbar-header'>Sneakers</div>

              <Box component='div' className='nav-links'>
                {navItems.map((item) => {
                  return (
                    <div
                      className={`${
                        activeLink === item
                          ? "active-border-bottom"
                          : "transparent-border-bottom"
                      } nav-link-container`}
                      key={item}>
                      <a
                        className='nav-link'
                        onMouseEnter={() => handleActiveLinkChange(item)}
                        onMouseLeave={() => handleActiveLinkChange("")}>
                        {item}
                      </a>
                    </div>
                  );
                })}
              </Box>
            </div>
            <div className='navbar-right'>
              <IconButton className='cart-button' onClick={handleCartOpen}>
                <img src={iconCart} alt='cart' />
                {cartQuantity > 0 && (
                  <div className='cart-items-indicator'>
                    <span>{cartQuantity}</span>
                  </div>
                )}
              </IconButton>

              <Avatar alt='avatar' src={avatar} />
            </div>
            <CartModal
              open={cartOpen}
              onClose={handleCartClose}
              anchor={cartAnchor}
            />
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default TopNavBar;
