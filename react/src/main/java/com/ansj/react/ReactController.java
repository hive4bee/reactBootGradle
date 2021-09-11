package com.ansj.react;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReactController {
    @GetMapping("main")
    public String main(){
        return "index";
    }
    @GetMapping("ansj")
    public String ansj(){
        return "index";
    }
}
