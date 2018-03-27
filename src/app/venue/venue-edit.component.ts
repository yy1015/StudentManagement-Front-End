import { Component, OnInit } from '@angular/core';
import { IVenue } from '../models/venue';
import { VenueService } from '../services/venue.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './venue-edit.component.html'
})
export class VenueEditComponent implements OnInit {
  venue: IVenue;
  constructor(
    private venueService: VenueService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.venueService.getVenueById(id)
      .then(venue => this.venue = venue);
  }

  updateVenue(venue: IVenue){
    this.venueService.updateVenue(venue)
      .then(()=> this.goBack())
  }

  goBack(){
    this.router.navigate(['/venues']);
  }
}
