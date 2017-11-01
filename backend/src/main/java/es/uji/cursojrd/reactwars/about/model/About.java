package es.uji.cursojrd.reactwars.about.model;

import es.uji.cursojrd.reactwars.about.dto.AboutList;

import java.util.Collections;
import java.util.List;

import static java.util.stream.Collectors.toList;

public class About
{
    protected Course course;
    protected List<Teacher> teachers;

    public About(Course course, List<Teacher> teachers)
    {
        this.course = course;
        this.teachers = teachers;
    }

    public String courseName()
    {
        return this.course.name();
    }

    public List<Teacher> courseTeachers()
    {
        return Collections.unmodifiableList(teachers);
    }

    public AboutList toAboutList()
    {
        List<String> teacherNames = this.teachers.stream()
                .map(teacher -> teacher.fullName())
                .collect(toList());

        return new AboutList(this.course.name(), teacherNames);
    }
}
