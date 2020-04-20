import React, {useContext, useState} from 'react';
import { ModalContext } from  '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles} from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({receta}) => {

    //Configuracion del modal de material-ui
    const [ modalStyled ] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    //extrar los valores del context
    const { informacion, guardarIdReceta } = useContext(ModalContext);
    //Prueba 
    console.log(informacion);
    
 
    const { strDrinkThumb, strDrink, idDrink} = receta;
    
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img src={strDrinkThumb} alt={`Imagen de ${strDrink}`} className="card-imt-top"/>

                <div className="card-body">
                    <button className="btn btn-block btn-danger" type="button"
                        onClick={() => {
                            guardarIdReceta(idDrink);
                            handleOpen();
                        }}
                    >Ver Bebida </button>

                    <Modal 
                    open={open} 
                    onClose={() => {
                        //cambia el id a null
                        guardarIdReceta(null);
                        handleClose();
                    }}
                    >
                        <div style={modalStyled} className={classes.paper}>
                            <h1>Hola desde el Modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;