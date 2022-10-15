import '../Estilos/EstiloDatosPer.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Libro from '../Imagenes/Libro.png'


function datosPersonales() {
  return (
    <div>
      <img className='Libro'
        src={Libro} alt='libro' />
      <Box >
        <Grid container spacing={0} columns={6} direction="column" justifyContent="center" alignItems="flex-start"
          sx={{
            marginTop: -69,
            '& .MuiPaper-root': {
              boxShadow: 'unset'
            }
          }}>
          <Grid item xs={8} md={4}>
            <button>Datos Personales.</button>
          </Grid>
          <Grid item xs={8} md={4}>
            <button>Conocimientos.</button>
          </Grid>
          <Grid item xs={8} md={4}>
            <button>Estudios.</button>
          </Grid>
          <Grid item xs={8} md={4}>
            <button>Experiencia Laboral.</button>
          </Grid>
          <Grid item xs={8} md={4}>
            <button>Referencias.</button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default datosPersonales;