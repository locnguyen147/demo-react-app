import React from 'react'
import {Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableRow} from '@mui/material';
import {AppBarHeader} from '../../components/AppBar'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import iconHouse from '../../assets/icons/iconHouse.svg'
/**
* @author
* @function LayoutMain
**/

export const LayoutMain = (props) => {
  const [openSideBar, setOpenSideBar] = React.useState(false)

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box display={'flex'} width={'100%'}>
      <Box minWidth={250} display={openSideBar ? 'block' : 'none'}>
        <p style={{
          color: 'black',
          fontSize: '20px',
          fontWeight: '600',
        }}>tranlinhmobile</p>
        {/* <Table>
          <TableBody>
            <TableCell>
              <TableRow sx={{display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
                <div style={{display:'flex'}}>
                  <img src={iconHouse} alt='' />
                  <div style={{
                    color:'black',
                    fontSize:'14px',
                    fontWeight:'600',
                    marginLeft:'15px'
                  }}>Tổng quan</div>
                </div>
                <img src={iconArrowDown} alt='' />
              </TableRow>
            </TableCell>
          </TableBody>
        </Table> */}

        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={{
              minWidth: '30px'
            }}>
              <img src={iconHouse} alt='' />
            </ListItemIcon>
            <ListItemText primary="Tổng quan" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{pl: 4}}>
                {/* <ListItemIcon>
                  <StarBorder />
                </ListItemIcon> */}
                <ListItemText primary="Bán hàng" />
              </ListItemButton>
              <ListItemButton sx={{pl: 4}}>
                {/* <ListItemIcon>
                  <StarBorder />
                </ListItemIcon> */}
                <ListItemText primary="Dịch vụ - Bảo hành" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
      <Box width={'100%'}>
        <AppBarHeader openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        {props.children}
      </Box>
    </Box>
  )

}