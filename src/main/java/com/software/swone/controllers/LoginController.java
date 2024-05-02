package com.software.swone.controllers;

import com.software.swone.dao.UsuarioDao;
import com.software.swone.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    private UsuarioDao usuarioDao;
    @RequestMapping(value="api/login", method = RequestMethod.POST)
    public String registrarUsuario(@RequestBody Usuario usuario){
        if (usuarioDao.verificarEmailPassword(usuario)){
            return "OK";
        }
        return "FAIL";

    }
}
