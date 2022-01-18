import { useContext, useState } from 'react/cjs/react.development';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

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
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    //Configuracion del modal de material-ui
    const { modalStyle } = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    //Extraer los valores del context
    const { infoReceta, setIdReceta, setInfoReceta } = useContext(ModalContext);
    console.log(infoReceta)
    return (
        <div className='col-md-4 mb-4'>
            <div className='card' >
                <h2 className='card-header'>{receta.strDrink}</h2>

                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

                <div className='card-body'>
                    <button
                        type='button'
                        className='btn btn-block btn-primary'
                        onClick={ () => {
                            setIdReceta(receta.idDrink);
                            handleOpen();
                        }} >Ver Receta</button>

                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose();
                            setInfoReceta({});
                            setIdReceta(null);
                        }} >
                            
                            <div style={modalStyle} className={classes.paper} >
                                <h2>{infoReceta.strDrink}</h2>
                                <h3 className='mt-4'>Instrucciones</h3>
                                <p>
                                    {infoReceta.strInstructions}
                                </p>

                                <img src={infoReceta.strDrinkThumb} className='img-fluid my-4' />
                            </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Receta
