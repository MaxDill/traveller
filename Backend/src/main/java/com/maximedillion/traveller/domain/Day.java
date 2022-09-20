package com.maximedillion.traveller.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Day {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date date;

    private String startLocation;

    private String endLocationLocation;

    private String dayOfWeek;

    @ManyToMany(fetch = FetchType.LAZY)
    private Collection<Activity> activities = new ArrayList();

}
