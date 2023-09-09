import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';


/**
* @author
* @function AppBar

**/

export const AppBarHeader
  = (props) => {
    const {openSideBar, setOpenSideBar} = props
    return (
      <Box sx={{height: '58px'}}>
        <AppBar position="static" sx={{height: '58px', color: 'black', backgroundColor:'white'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
              onClick={() => setOpenSideBar(!openSideBar)}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div"
              sx={{fontWeight: '600', fontSize: '20px', color: '#0F1824'}}>
              Danh sách phiếu xuất linh kiện dịch vụ
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
    )

  }