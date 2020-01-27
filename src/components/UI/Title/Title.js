import React from 'react'

import classes from './Title.module.css'

const Title = (props) => {
    return (
        <div className={classes.Cont}>
            <p>{props.title}</p>
        </div>
    )
}

export default Title
