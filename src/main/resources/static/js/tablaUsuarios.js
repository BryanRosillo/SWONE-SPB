$(document).ready(function() {
    cargarUsuarios();
});

async function cargarUsuarios(){
    const request = await fetch('api/usuarios',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    });

    const usuarios = await request.json();
    let listadoUsuariosHtml = '';


    for(let usuario of usuarios){
        let botonEliminar = '<button class="actions-btn" onclick="eliminarUsuario('+usuario.id+')">Eliminar</button>';

        let usuarioHtml = '<tr><td>'+usuario.id+'</td><td>'+ usuario.nombre +'</td><td>'+usuario.apellido+'</td><td>'+usuario.email+'</td><td>'+usuario.telefono+'</td><td><button class="actions-btn">Editar</button>'+botonEliminar+'</td><tr>';
        listadoUsuariosHtml += usuarioHtml;

    }


    document.querySelector('#tablaUsuarios tbody').outerHTML = listadoUsuariosHtml;
}


async function eliminarUsuario(id){
    if(confirm("¿Desea eliminar este usuario?")){
        const request = await fetch('api/usuarios/'+id,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        });
    }else{
        alert("Esta bien");
    }

    location.reload();



}