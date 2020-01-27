import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles(theme => ({
    root: {
      color: 'white',
      background: '#E37B00',
      '&:hover': {
        background: '#E37B00',
      },
    },
  }))(Button);

const Boton = (props) => {
    return (
        <ColorButton onClick={props.onClick} variant="contained" color="primary">
            {props.etiqueta}
        </ColorButton>
    )
}

export default Boton
