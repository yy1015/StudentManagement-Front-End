import { Component, OnInit } from '@angular/core';
import { IVenue } from '../models/venue';
import { VenueService } from '../services/venue.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './venue-new.component.html'
})
export class VenueNewComponent implements OnInit {
  venue: IVenue;
  constructor(private venueService: VenueService, private router: Router) { }

  ngOnInit() {
    this.venue = <IVenue>{};
  }

  createVenue(venue: IVenue){
    this.venueService.createVenue(venue)
      .then(()=>{
        this.venue = <IVenue>{};
        this.router.navigate(['/venues']);
      });
  }
}
