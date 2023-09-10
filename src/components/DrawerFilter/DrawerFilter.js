import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import {Button, Collapse, IconButton, InputAdornment, List, ListItemButton, ListItemText, ListItemIcon, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Chip, ListSubheader} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import OutlinedInput from '@mui/material/OutlinedInput';
import {useTheme} from '@emotion/react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Đang giao dịch',
  'Ngừng giao dịch',

];
// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }
export const DrawerFilter = (props) => {
  const {open, anchor, setOpenDrawerFilter} = props

  const [openCollapse, setOpenCollapse] = React.useState(true);

  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: {value},
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const list = (anchor) => (
    <Box
      sx={{width: 410, height: '100%'}}
      role="presentation"
      position={'relative'}
    //onClick={toggleDrawer(anchor, false)}
    //onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}
        sx={{
          margin: '15px 20px'
        }}>
        <Typography>
          Bộ lọc
        </Typography>
        <IconButton onClick={() => setOpenDrawerFilter(false)}>
          <ClearIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        sx={{
          margin: '0 20px'
        }}>
        <TextField
          sx={{marginTop: '14px'}}
          size="small"
          // Autofocus on textfield
          autoFocus
          placeholder="Tìm kiếm"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          //onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Escape") {
              // Prevents autoselecting item while typing (default Select behaviour)
              e.stopPropagation();
            }
          }}
        />
        <Button
          sx={{
            textTransform: 'none',
            fontSize: '14px',
            color: '#007AFF',
            margin: '15px 0',
            border: 'none'
          }}
          //onClick={() => setOpenDrawerFilter(true)}
          variant="primary" startIcon={<FilterAltOutlinedIcon color="primary" />}>
          Bộ lọc đã lưu
        </Button>
        <Divider />
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon sx={{
              minWidth: '30px'
            }}>
              {openCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary="Trạng thái" />
            <Typography sx={{
              borderRadius: '20px',
              border: '1px solid #007AFF',
              fontSize: '14px',
              color: '#007AFF',
              padding: '4px 10px'
            }}>
              Đã chọn 2
            </Typography>
          </ListItemButton>
          <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <FormControl fullWidth>
              {/* <InputLabel id="demo-multiple-chip-label">Chip</InputLabel> */}
              <Select
                size='small'
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" />}
                renderValue={(selected) => (
                  <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                <ListSubheader>
                  <TextField
                    size="small"
                    // Autofocus on textfield
                    autoFocus
                    placeholder="Tìm kiếm"
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                    //onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        // Prevents autoselecting item while typing (default Select behaviour)
                        e.stopPropagation();
                      }
                    }}
                  />
                </ListSubheader>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  //style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Collapse>
        </List>
      </Box>

      <Box position={'absolute'} bottom={30}
      sx={{
        width:'100%'
      }}>
        <Box sx={{
          width:'100%',
          textAlign:'center'
        }}>
          <Button sx={{
            textTransform:'none',
            border:'1px solid #ED0A34',
            color:'#ED0A34',
            marginRight:'10px',
            padding:'6px 20px'
          }}>Hủy</Button>
          <Button variant='contained'
          sx={{
            textTransform:'none',
            border:'none',
            color:'white',
            marginRight:'10px',
            padding:'6px 20px'
          }}
          >Lọc</Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <Drawer
          anchor={anchor}
          open={open}
          onClose={() => setOpenDrawerFilter(false)}
        //onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}