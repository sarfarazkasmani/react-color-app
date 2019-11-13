import React from 'react'
import {withStyles} from '@material-ui/styles'

const styles = {
  root: {
    width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-4px',
  }
}

function DraggableColorBox(props) {
  const {classes} = props
  return (
    <div className={classes.root} style={{background:props.color}}>
      {props.color}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
