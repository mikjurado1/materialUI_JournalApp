
import { Google } from '@mui/icons-material'
import { Button, Grid, TextField, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AuthLayout from '../layout/AuthLayout'

export default function RegisterPage() {
  return (
   <AuthLayout title='Crear Cuenta'>
      <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Nombre" type="text" placeholder='Tu nombre...' fullWidth/>
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Correo" type="email" placeholder='correo@email.com' fullWidth/>
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField label="Password" type="password" placeholder='Password' fullWidth/>
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button variant='contained' fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>  
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresar
              </Link>
            </Grid>          
          </Grid>
        </form>
   </AuthLayout>   
  )
}
