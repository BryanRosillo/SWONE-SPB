package com.software.swone.controllers;

import com.software.swone.dao.UsuarioDao;
import com.software.swone.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;
    @RequestMapping(value="usuarios")
    public List <Usuario> getUsuarios(){
        return usuarioDao.getUsuarios();
    }

}
