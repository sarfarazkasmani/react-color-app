export default {
	root: {
        backgroundColor:'white',
        border:'1px solid #000',
        borderRadius:'5px',
        padding:'0.5rem',
        position:'relative',
        overflow:'hidden',
        '&:hover': {
            cursor:'pointer'
        }
    },
    colors: {
        backgroundColor:'#dae1e3',
        height:'120px',
        width:'100%',
        borderRadius: '5px',
        overflow:'hidden'
    },
    title: {
        display:'flex',
        justifyContent: 'space-between',
        alignItem:'center',
        margin:'0',
        color:'black',
        paddingTop:'0.5rem',
        fontSize:'1rem',
        position:'relative'
    },
    emoji: {
        marginLeft:'0.5rem',
        fontSize:'1.5rem'
    },
    miniColor: {
        height:'25%',
        width: '20%',
        display:'inline-block',
        margin:'0 auto',
        position:'relative',
        marginBottom:'-4px',
    }
};