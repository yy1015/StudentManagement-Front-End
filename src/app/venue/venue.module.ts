import { NgModule } from "@angular/core";
import { VenueListComponent } from "./venue-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { VenueDetailComponent } from './venue-detail.component';
import { VenueNewComponent } from './venue-new.component';
import { FormsModule} from '@angular/forms';
import { VenueEditComponent } from './venue-edit.component';


@NgModule({
    declarations:[
        VenueListComponent,
        VenueDetailComponent,
        VenueNewComponent,
        VenueEditComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            {path: "venues", component: VenueListComponent},
            {path: "venues/new", component: VenueNewComponent},
            {path: "venues/:id", component: VenueEditComponent}
        ])
    ],
    providers:[

    ]
})
export class VenueModule{
}