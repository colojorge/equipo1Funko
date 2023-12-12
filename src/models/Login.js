import conn from '../config/conn.js';

// la informacion que enviamos por postman entra en (data)
const postLogin = async (data) => {
        // destructurando la info entrante form login
        const { email } = data;
        try {
          // desctructurando el array entrante de la BD
          const [results, fields] = await conn.query('SELECT email FROM formfunko');

          const emailResult = results.some( u => u.email === email);
          if (emailResult) {
              console.log(`usuario existe: ${emailResult}`);
          }else{
            console.log(`usuario NO existente: ${emailResult}`);
          }
        } 
        catch (error) {
          console.error('Error executing query: ' + error.message);
        } 
        finally {
          conn.releaseConnection();
        }
}
export default postLogin;