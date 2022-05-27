const APIBECAS_URL = "http://127.0.0.1:8000/api/beca/";




export default async function GetAllBecas(){
    try{
        const respuesta = await fetch(`${APIBECAS_URL}`);
        const data = await respuesta.json();
        console.log(data.becas)
        return data.becas;
    }catch(error){
        window.alert(error);
    }
}

export async function registerBecas(newBeca){
    return await fetch(APIBECAS_URL, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(newBeca.nombre),
            "porcentaje": parseInt(newBeca.porcentaje),
            "pais": String(newBeca.pais),
            "universidad": String(newBeca.universidad),
            "requerimientos": String(newBeca.requerimientos),
        })
    } );

}

