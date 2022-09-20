package com.maximedillion.traveller.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.TreeSet;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Day implements Comparable<Day> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date date;

    private String startLocation;

    private String endLocationLocation;

    private String dayOfWeek;

    @ManyToMany(mappedBy="days")
    private Collection<Activity> activities = new TreeSet<>();

    @Override
    public int compareTo(Day d) {
        return this.getDate().compareTo(d.getDate());
    }

}
