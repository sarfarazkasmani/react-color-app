import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
		marginBottom: '-4px'
	},
	boxContent: {
		position: 'absolute',
		left: '10px',
		bottom: '10px',
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent:'space-between'
	}
};

function DraggableColorBox(props) {
	const { classes } = props;
	return (
		<div className={classes.root} style={{ background: props.color }}>
			<div className={classes.boxContent}>
				<span>{props.name}</span>
				<span>X</span>
			</div>
		</div>
	);
}

export default withStyles(styles)(DraggableColorBox);
