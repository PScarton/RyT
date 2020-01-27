import React from 'react'

import classes from './ChangeState.module.css';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ChangeState = (props) => {
    return (
        <div >
            <p className={classes.Title}>Actualiza el estado</p>
            <RadioGroup aria-label="position" name="position" value={props.estadoDeTarea} onChange={props.setEstado}>
            <FormControlLabel
                value="Por hacer"
                control={<Radio color="primary" />}
                label="Por hacer"
                labelPlacement="end"
                />
            <FormControlLabel
                value="En proceso"
                control={<Radio color="primary" />}
                label="En proceso"
                labelPlacement="end"
                />
            <FormControlLabel
                value="Finalizada"
                control={<Radio color="primary" />}
                label="Finalizada"
                labelPlacement="end"
                />
            </RadioGroup>
        </div>
    )
}

export default ChangeState;
