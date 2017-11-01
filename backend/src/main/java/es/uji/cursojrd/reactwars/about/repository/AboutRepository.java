package es.uji.cursojrd.reactwars.about.repository;

import es.uji.cursojrd.reactwars.about.model.About;
import es.uji.cursojrd.reactwars.about.model.Course;
import es.uji.cursojrd.reactwars.about.model.Teacher;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public class AboutRepository
{
    public About retrieveCourseAbout()
    {
        Course course = new Course("JRD Course");

        List<Teacher> teachers = Arrays.asList(
                new Teacher("Reyes Grangel"),
                new Teacher("Oscar Belmonte"),
                new Teacher("Ricardo Borillo")
        );

        return new About(course, teachers);
    }
}
