import React from 'react'

import { makeStyles,withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';

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

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI'
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

const Input = (props) => {
  const classes = useStyles();
    let rows = "10"
    let multilinea = false
    if(props.row){
      multilinea = true;
    }
    let input = <CssTextField  onBlur={props.onBlur} multiline={multilinea} rows={rows} value={props.value} onChange={props.onChange} fullWidth label={props.etiqueta} helperText={props.TextoDeAyuda} />;

    if(props.naked){
      input = <InputBase
                  fullWidth
                  onChange={props.onChange}
                  className={classes.margin}
                  placeholder="Busca entre tus comunidades"
                  inputProps={{ 'aria-label': 'naked' }}
              />
    }
    return (
      input
    )
}

export default Input
