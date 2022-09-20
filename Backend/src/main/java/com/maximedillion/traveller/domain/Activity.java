package com.maximedillion.traveller.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.TreeSet;

@Entity
@Inheritance
@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class Activity implements Comparable<Activity> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer cost;

    private Date startTime;

    private Date endTime;

    @ManyToMany(fetch = FetchType.LAZY)
    private Collection<Day> days;

    @Override
    public int compareTo(Activity a) {
        return this.getStartTime().compareTo(a.getEndTime());
    }

}
