import { Component } from '@angular/core';
import { GeneralDataService } from './services/general-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VLab Research Web Demo';

  public generalDataCache;


  constructor(private generalDataSvc: GeneralDataService) { 

  }

  ngOnInit() {
    this.generalDataSvc.getRemoteGeneralData().subscribe( response => {
      console.log(response);

      this.generalDataCache = response;
    } );
  }

}
