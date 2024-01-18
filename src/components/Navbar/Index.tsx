import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import './index.css';

//import logo from '../../assets/logo.png';

function NavBar() {
  const [menu, setMenu] = useState(false);

  return (
    <AppBar position="static" color="primary">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding="0.80rem"
      >
        <Grid item display="flex" marginLeft="6rem">
          <Box
            component="img"
            src=""
            alt="Logo"
            sx={{
              objectFit: 'cover',
            }}
          />
          <Typography variant="h5">V2 Engenharia</Typography>
        </Grid>
        <Grid item marginRight="6rem" className="menuDesk">
          <Button variant="text" sx={{ color: '#24274C' }}>
            Sobre nós
          </Button>
          <Button variant="text" sx={{ color: '#24274C' }}>
            Serviços
          </Button>
          <Button variant="text" sx={{ color: '#24274C' }}>
            Projetos
          </Button>
          <Button variant="contained" color="secondary">
            Entre em contato
          </Button>
        </Grid>

        {/* HAMBURGER BUTTON */}

        <img
          alt="Menu"
          src=""
          className="imgMob"
          onClick={() => setMenu(!menu)}
        />

        <Grid
          item
          className="menuMob"
          sx={{
            display: menu ? 'flex' : 'none',
            position: 'absolute',
            top: '3.5rem',
            right: '0rem',
            zIndex: '2rem',
            flexDirection: 'column',
            backgroundColor: '#7eb5c6',
          }}
        >
          <Button
            variant="text"
            sx={{ color: '#24274C' }}
            onClick={() => setMenu(false)}
          >
            Sobre nós
          </Button>
          <Button
            variant="text"
            sx={{ color: '#24274C' }}
            onClick={() => setMenu(false)}
          >
            Serviços
          </Button>
          <Button
            variant="text"
            sx={{ color: '#24274C' }}
            onClick={() => setMenu(false)}
          >
            Projetos
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setMenu(false)}
          >
            Entre em contato
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default NavBar;
