package Anyway.Project.BlindDate.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class BlindDateController {
    @GetMapping("/test")
    public String test(){
        log.info("Accessing /test");
        return "test";
    }
}
