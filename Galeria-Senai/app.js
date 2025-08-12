'use strict';

async function puxarFotos(){

    const url = 'http://localhost:3000/fotos'
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data


}

