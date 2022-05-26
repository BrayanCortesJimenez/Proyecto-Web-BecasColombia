const APIBECAS_URL = "http://127.0.0.1:8000/api/beca/";


async function GetAllBecas(){
    try{
        const respuesta = await fetch(`${APIBECAS_URL}`);
        const data = await respuesta.json();
        console.log(data)
        return data;
    }catch(error){
        window.alert(error);
    }
}

export default GetAllBecas