import React from 'react'

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#000',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI',
        fontSize: '20px'
      },
      ' label': {
        color: '#000',
        fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI',
        fontSize: '20px'
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#17A0AD',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#17A0AD',
        },
        '&:hover fieldset': {
          borderColor: '#17A0AD',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#17A0AD',
        },
      },
    },
  })(TextField);

const Input = (props) => {

    let rows = "10"
    let multilinea = false
    if(props.row){
      multilinea = true;
    }

    return (
      <CssTextField  multiline={multilinea} rows={rows} value={props.value} onChange={props.onChange} fullWidth label={props.etiqueta} helperText={props.TextoDeAyuda} />
    )
}

export default Input
