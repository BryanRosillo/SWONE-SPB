$(document).ready(function() {
    cargarUsuarios();
});

async function cargarUsuarios(){
    const request = await fetch('usuarios',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    });

    const usuarios = await request.json();
    let listadoUsuariosHtml = '';

    for(let usuario of usuarios){

        let usuarioHtml = '<tr><td>'+usuario.id+'</td><td>'+ usuario.nombre +'</td><td>'+usuario.apellido+'</td><td>'+usuario.email+'</td><td>'+usuario.telefono+'</td><td><button class="actions-btn">Editar</button><button class="actions-btn">Eliminar</button></td><tr>';
        listadoUsuariosHtml += usuarioHtml;

    }


    document.querySelector('#tablaUsuarios tbody').outerHTML = listadoUsuariosHtml;
}