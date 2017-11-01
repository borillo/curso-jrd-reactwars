package es.uji.cursojrd.reactwars.about.service;

import es.uji.cursojrd.reactwars.about.dto.AboutList;
import es.uji.cursojrd.reactwars.about.model.About;
import es.uji.cursojrd.reactwars.about.repository.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AboutService
{
    private AboutRepository aboutRepository;

    @Autowired
    public AboutService(AboutRepository aboutRepository)
    {
        this.aboutRepository = aboutRepository;
    }

    public AboutList buildAboutList()
    {
        About about = aboutRepository.retrieveCourseAbout();

        return about.toAboutList();
    }
}
