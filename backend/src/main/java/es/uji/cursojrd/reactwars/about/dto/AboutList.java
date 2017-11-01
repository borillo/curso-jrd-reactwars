package es.uji.cursojrd.reactwars.about.dto;

import java.util.List;

public class AboutList
{
    private String course;
    private List<String> teachers;

    public AboutList(String course, List<String> teachers)
    {
        this.course = course;
        this.teachers = teachers;
    }

    public String getCourse()
    {
        return course;
    }

    public void setCourse(String course)
    {
        this.course = course;
    }

    public List<String> getTeachers()
    {
        return teachers;
    }

    public void setTeachers(List<String> teachers)
    {
        this.teachers = teachers;
    }
}
