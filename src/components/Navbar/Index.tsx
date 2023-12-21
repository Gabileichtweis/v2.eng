import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid } from '@mui/material';

function NavBar() {
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
          <AdbIcon sx={{ marginRight: '1.5rem' }} />
          <Typography variant="h5">V2 Engenharia</Typography>
        </Grid>
        <Grid item marginRight="6rem">
          <Button variant="text" sx={{ color: '#ffff' }}>
            Sobre nós
          </Button>
          <Button variant="text" sx={{ color: '#ffff' }}>
            Serviços
          </Button>
          <Button variant="text" sx={{ color: '#ffff' }}>
            Projetos
          </Button>
          <Button variant="contained" color="secondary">
            Entre em contato
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default NavBar;
