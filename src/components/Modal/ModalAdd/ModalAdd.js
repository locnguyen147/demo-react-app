import * as React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import {listColumn} from '../../../pages/Dashboard/fakeData';
import {DndContext} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {SortableItems} from './SortableItems/SortableItems';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  minHeight: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const ModalAdd = (props) => {
  const {open, onClose} = props;
  const [data, setData] = React.useState(listColumn)

  const handleDragEnd = (event) => {
    //console.log(event)
    const {active, over} = event

    if(!over) return
    if(active.id !== over.id) {
      const oldIndex = data.findIndex(d => d.name === active.id)
      const newIndex = data.findIndex(d => d.name === over.id)

      const newData = arrayMove(data, oldIndex, newIndex)

      setData(newData)
    }
  }

  const columnIds = React.useMemo(() => data.map((item) => item.name), [data]);
  
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              backgroundColor: '#F2F9FF',
              padding: '15px 24px 8px 24px'
            }}
            display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Điều chỉnh cột hiển thị
            </Typography>
            <IconButton onClick={onClose}>
              <ClearIcon />
            </IconButton>
          </Box>
          <Box>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={6}>
                <Item>
                  <Typography id="modal-modal-title"
                    sx={{
                      fontWeight: '600',
                      fontSize: '14px',
                      color: 'black',
                      padding: '14px 0'
                    }}
                  >
                    Thêm cột hiển thị
                  </Typography>
                  <Divider />
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

                  <Box>
                    {
                      listColumn.map((item, index) => (
                        <Box
                          key={index}
                          display={'flex'} alignItems={'center'}
                          sx={{
                            backgroundColor: '#F2F9FF',
                            marginTop: '10px'
                          }}>
                          <Checkbox
                            color="primary"
                            checked={false}
                            inputProps={{
                              'aria-labelledby': 1,
                            }}
                          />
                          <Typography sx={{
                            fontSize: '14px',
                            color: '#0F1824',
                            width: '100%',
                            textAlign: 'left'
                          }}>
                            {item.name}
                          </Typography>
                        </Box>
                      ))
                    }
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Typography id="modal-modal-title"
                    sx={{
                      fontWeight: '600',
                      fontSize: '14px',
                      color: 'black',
                      padding: '14px 0'
                    }}
                  >
                    Cột hiển thị
                  </Typography>
                  <Divider />
                  <Typography id="modal-modal-title"
                    sx={{
                      fontWeight: '500',
                      fontSize: '14px',
                      color: '#007AFF',
                      padding: '14px 0'
                    }}
                  >
                    Di chuyển để sắp xếp cột hiển thị
                  </Typography>
                  <DndContext onDragEnd={handleDragEnd}>
                    <SortableContext items={columnIds} strategy={verticalListSortingStrategy}>
                      <Box>
                        {
                          data.map((item) => (
                            // <Box key={index}
                            //   display={'flex'} alignItems={'center'}
                            //   sx={{
                            //     marginTop: '10px',
                            //     cursor: 'pointer'
                            //   }}>
                            //   <Typography sx={{
                            //     fontSize: '14px',
                            //     color: '#0F1824',
                            //     width: '100%',
                            //     textAlign: 'left'
                            //   }}>
                            //     {item.name}
                            //   </Typography>
                            //   <IconButton>
                            //     <ClearIcon />
                            //   </IconButton>
                            // </Box>
                            <SortableItems key={item.name} id={item.name}/>
                          ))
                        }
                      </Box>
                    </SortableContext>
                  </DndContext>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}