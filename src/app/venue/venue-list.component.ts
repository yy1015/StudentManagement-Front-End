import { Component, OnInit } from "@angular/core";
import { IVenue } from "../models/venue";
import { VenueService } from "../services/venue.service";


@Component({
    templateUrl: "./venue-list.component.html"
})
export class VenueListComponent implements OnInit{
    title: string = "New Venue List";
    venues: IVenue[];
    selectedVenue: IVenue = null;
    constructor(private venueService: VenueService){
    }

    ngOnInit(){
        this.venueService.getVenues()
            .then( v => this.venues = v )
            .catch(error => console.log(error));
    }

    selectVenue(venue){
        this.selectedVenue = venue;
    }
}