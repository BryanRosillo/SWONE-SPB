package com.software.swone.dao;

import com.software.swone.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();


    void eliminar(Long id);
}
