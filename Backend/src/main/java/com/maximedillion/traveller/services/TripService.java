package com.maximedillion.traveller.services;

import com.maximedillion.traveller.domain.Activity;
import com.maximedillion.traveller.domain.AppUser;
import com.maximedillion.traveller.domain.Day;
import com.maximedillion.traveller.domain.Trip;

import java.util.List;

public interface TripService {

    Trip addTripToUser(AppUser user, Trip trip);

    Day addDayToTrip(Trip trip, Day day);

    Activity addActivityToDay(Day day, Activity activity);

    List<Trip> getAllTrips(AppUser user);

}
