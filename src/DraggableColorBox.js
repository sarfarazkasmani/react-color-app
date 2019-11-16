import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.5)'
		}
	},
	boxContent: {
		display: 'flex',
		justifyContent: 'space-between',
		position: 'absolute',
		left: '10px',
		bottom: '10px',
		color: 'rgba(0, 0, 0, 0.5)',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px'
	},
	deleteIcon: {
		transition: 'all 0.3s ease-in-out'
	}
};

const DraggableColorBox = SortableElement((props) => {
	const { classes, handleClick, name, color } = props;
	return (
		<div className={classes.root} style={{ background: color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
