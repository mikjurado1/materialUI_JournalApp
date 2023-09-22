import React from 'react'
import JournalLayout from '../layout/JournalLayout'
import NothingSelectedView from '../views/NothingSelectedView'
import NoteView from '../views/NoteView'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'


export default function JournalPage() {
  return (
    <JournalLayout>
      {/*<Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur eum, architecto doloribus laborum repellat delectus fugit magni ipsam eveniet aliquam exercitationem voluptates ratione ipsa dolores distinctio maxime officia. Ipsa, voluptatibus.
  </Typography>*/}
      <NoteView/>
      <NothingSelectedView/>
      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{backgroundColor: 'error.main', opacity:0.90},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
    
  )
}
