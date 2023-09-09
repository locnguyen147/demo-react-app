import React from 'react'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
/**
* @author
* @function SortableItems
**/

export const SortableItems = (props) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Box
        display={'flex'} alignItems={'center'}
        sx={{
          // backgroundColor: '#F2F9FF',
          marginTop: '10px',
          cursor: 'pointer'
        }}>
        <Typography sx={{
          fontSize: '14px',
          color: '#0F1824',
          width: '100%',
          textAlign: 'left'
        }}>
          {props.id}
        </Typography>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </Box>
    </div>
  )

}