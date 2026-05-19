package com.UPIIZ.Ejercicio13.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calculosVarios")
public class indexController {

    @GetMapping
    public String getIndex()
    {
        return "index";
    }
    
}
