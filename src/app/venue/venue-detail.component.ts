import { Component, Input } from '@angular/core';
import { IVenue } from '../models/venue';

@Component({
  selector: 'venue-detail',
  templateUrl: './venue-detail.component.html'
})
export class VenueDetailComponent {
  @Input() venue: IVenue;
}
