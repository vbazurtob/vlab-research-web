import { Component } from '@angular/core';
import { GeneralDataService } from './services/general-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VLab Research Web Demo';

  constructor(private generalDataSvc: GeneralDataService) { 

  }

  ngOnInit() {
    this.generalDataSvc.getRemoteGeneralData().subscribe( response => {
      console.log(response);
    } );
  }

}
