package es.uji.cursojrd.reactwars.about.controller;

import es.uji.cursojrd.reactwars.about.dto.AboutList;
import es.uji.cursojrd.reactwars.about.service.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AboutController
{
    @Autowired
    private AboutService aboutService;

    @RequestMapping("/about")
    public AboutList about()
    {
        return aboutService.buildAboutList();
    }
}