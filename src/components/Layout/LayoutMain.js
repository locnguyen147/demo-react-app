import React from 'react'
import {Box} from '@mui/material';
import {AppBarHeader} from '../../components/AppBar'
/**
* @author
* @function LayoutMain
**/

export const LayoutMain = (props) => {
  const [openSideBar, setOpenSideBar] = React.useState(false)


  return (
    <Box display={'flex'} width={'100%'}>
      <Box minWidth={250} display={openSideBar ? 'block' : 'none'}>
      tranlinhmobile
        {/* <SideBar anchor={'left'} openSideBar={openSideBar}/> */}
      </Box>
      <Box width={'100%'}>
        <AppBarHeader openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
        {props.children}
      </Box>
    </Box>
  )

}