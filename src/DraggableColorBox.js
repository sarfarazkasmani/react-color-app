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
  console.log(props)
  const {classes} = props
  return (
    <div className={classes.root} style={{background:props.color}}>
      {props.name}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
