import Head from 'next/head';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Hidden from '@mui/material/Hidden';
import { styled, } from '@mui/system';
import Link from 'next/link'
import { createTheme, ThemeProvider } from '@mui/material';
import { wrapper } from '../redux/store';
import '../public/styles.css';
import { Open_Sans } from 'next/font/google'
 
const inter = Open_Sans({ subsets: ['latin'],   weight: ["300", "400", "500", "700"],})
 
const theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
},});

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '100px 0',
  width: '80%',
  margin: '0 auto'
});

const Container = styled('div')({
    width: '100%',
});

const StyledAppBar = styled(AppBar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 10
});

const MenuButton = styled(IconButton)({
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const NavLinks = styled('div')({
  display: 'flex',
  textDecoration: 'none',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

const DrawerContent = styled('div')({
  width: 250,
});

const ToolbarContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const ToolbarTitle = styled(Button)({
});

function App({Component, pageProps}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <DrawerContent>
      <List>
        <Link href="/" onClick={handleDrawerToggle}>
          <ListItemText primary="Play and Visualize" />
        </Link>
        <Link href="/compose" onClick={handleDrawerToggle}>
          <ListItemText primary="Compose and Share" />
        </Link>
        <Link href="/learn" onClick={handleDrawerToggle}>
          <ListItemText primary="Learn Songs" />
        </Link>
        <Link href="/circle" onClick={handleDrawerToggle}>
          <ListItemText primary="The Circle Of Fifths" />
        </Link>
      </List>
      <Divider />
    </DrawerContent>
  );

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
          font-weight: 300;
        }
      `}</style>
       <ThemeProvider theme={theme}>
      <div className="container">
          <Head>
            <title>Fretty</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </div>
      <Root>
          
        <CssBaseline />
        <StyledAppBar position="fixed">
          <ToolbarContent>
            <MenuButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </MenuButton>
            <ToolbarTitle variant="secondary" startIcon={<FavoriteIcon />}>
              <Title variant="h6">
                Fretty
              </Title>
            </ToolbarTitle>
              <NavLinks>
                <StyledLink href="/">
                  <Button color="inherit">Play and Visualize</Button>
                </StyledLink>
                <StyledLink href="/compose">
                  <Button color="inherit">Compose and Share</Button>
                </StyledLink>
                <StyledLink href="/learn">
                  <Button color="inherit">Learn Songs</Button>
                </StyledLink>
                <StyledLink href="/circle">
                  <Button color="inherit">The Circle Of Fifths</Button>
                </StyledLink>
              </NavLinks>
          </ToolbarContent>
        </StyledAppBar>
        <nav>
            <Drawer
              variant="temporary"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
        </nav>
        <Container>
            <Component {...pageProps} />
        </Container>
      </Root>
    </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App);
