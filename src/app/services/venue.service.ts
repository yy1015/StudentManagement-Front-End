import { Injectable } from "@angular/core";
import { IVenue } from "../models/venue";
import { Http, Headers } from "@angular/http"
import { environment } from "../../environments/environment";

@Injectable()
export class VenueService{
    private _apiUrl = `${environment.apiDomain}/api/venues`;
    private _headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){

    }

    getVenueById(id: number): Promise<IVenue>{
        return this.http.get(`${this._apiUrl}/${id}`)
            .toPromise()
            .then(venue => venue.json() as IVenue)
            .catch(this.handleError);
    }

    getVenues(): Promise<IVenue[]>{
        return this.http.get(this._apiUrl)
                .toPromise()
                .then(venues => venues.json() as IVenue[])
                .catch(this.handleError);
    }

    createVenue(venue: IVenue): Promise<void>{
        return this.http.post(this._apiUrl, 
            JSON.stringify(venue), 
            {headers: this._headers}
        )
        .toPromise()
        .catch(this.handleError);
    }

    updateVenue(venue: IVenue): Promise<void>{
        return this.http.put(`${this._apiUrl}/${venue.id}`, 
            JSON.stringify(venue), 
            {headers: this._headers})
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error): Promise<any>{
        console.error('An error occurred: ', error);
        return Promise.reject(error.message || error);
    }
}