/* Este header es una configuracion que le vamos a pasar a AXIOS 
cuando hagamos las peticiones donde pidan autenticacion de tipo BEARER. */

/* Por ejemplo para que en las compras, se muestren las compras que 
UNICAMENTE hizo el usuario que esta logeado en ese momento */

const getConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default getConfig;
