import React from 'react'
import {Box, Button, FormControl, MenuItem, Select} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import {ButtonGroupAdd} from '../../components/ButtonGroupAdd';
import DeleteX from '../../assets/icons/deleteX.svg'
import TableList from './table';
import {ModalAdd} from '../../components/Modal/ModalAdd/ModalAdd';
import {SearchInputIcon} from '../../components/Search/Search';

/**
* @author
* @function Dashboard

**/

export const Dashboard
  = (props) => {
    const [needConfirm, setNeedConfirm] = React.useState('Cần xác nhận');
    const [openModalAdd, setOpenModalAdd] = React.useState(false);

    const handleChange = (event) => {
      setNeedConfirm(event.target.value);
    };

    return (
      <div>
        <Box m={3}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <SearchInputIcon titleLabel='Tìm kiếm theo mã khách hàng, tên khách hàng và số điện thoại'/>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
              <Button sx={{
                textTransform: 'none',
                fontSize: '14px',
                color: 'black',
                marginRight: '20px'
              }}>Đang lọc</Button>
              <Button sx={{
                textTransform: 'none',
                fontSize: '14px',
                color: 'black',
                marginRight: '20px'
              }}>Yêu cầu</Button>
              <Button sx={{
                textTransform: 'none',
                fontSize: '14px',
                color: 'black',
                marginRight: '20px'
              }}>Đã xuất kho</Button>
              <FormControl sx={{minWidth: 120}} size="small">
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={needConfirm}
                  //label="Age"
                  onChange={handleChange}
                  sx={{
                    "& .MuiSelect-select": {
                      padding: '6px 8px',
                      fontSize: '14px',
                      color: 'black',
                    },
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": {border: 0},
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: 0,
                    },
                  }}
                >
                  <MenuItem value={'Cần xác nhận'}>Cần xác nhận</MenuItem>
                  <MenuItem value={'Cần xác nhận1'}>Cần xác nhận1</MenuItem>
                  <MenuItem value={'Cần xác nhận2'}>Cần xác nhận2</MenuItem>
                </Select>
              </FormControl>
              <Button
                sx={{
                  textTransform: 'none',
                  fontSize: '14px',
                  color: '#007AFF',
                  marginRight: '20px',
                  border: 'none'
                }}
                variant="primary" startIcon={<FilterAltOutlinedIcon color="primary" />}>
                Bộ lọc
              </Button>
              <ButtonGroupAdd  
              openAdd = {openModalAdd}
              setOpenModalAdd = {setOpenModalAdd}/>
            </Box>
          </Box>
        </Box>
        <Box m={3} sx={{display: 'flex'}} gap={2}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#F2F9FF',
              padding: '6px 10px',
              borderRadius: '20px'
            }}>
            <div>Trạng thái: Đã xuất kho, Đã xác nhận</div>
            <img src={DeleteX} alt='' />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#F2F9FF',
              padding: '6px 10px',
              borderRadius: '20px'
            }}>
            <div>Kho: TLM, LK247</div>
            <img src={DeleteX} alt='' />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#F2F9FF',
              padding: '6px 10px',
              borderRadius: '20px'
            }}>
            <div>Kỹ thuật: Bình, Khoa</div>
            <img src={DeleteX} alt='' />
          </div>
        </Box>
        <TableList />

        <ModalAdd 
        open = {openModalAdd}
        onClose = {() => setOpenModalAdd(false)}
        />
      </div>
    )

  }