import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralDataService {

  private generalDataURL = environment.endpointsBaseUrl + environment.endpoints.generalCfg ;

  constructor(private http: HttpClient) { 

  }

  public getRemoteGeneralData(){

    return this.http.get(this.generalDataURL);

  }

}
