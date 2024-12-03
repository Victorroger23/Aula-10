import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';


const Login = () =>{
    const [login, setLogin] = useState ()
    return (
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="login_titulo" aria-describedby="login_titulo_helper_text" value={login} onChange={e => { setTituloTarefa(e.target.value) }} />
              <FormHelperText id="login_titulo_helper_text">Login.</FormHelperText>
            </FormControl>
          </Grid>
          
    );
  }
  export default Login