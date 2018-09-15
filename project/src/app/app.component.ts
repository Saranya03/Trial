import { Component } from '@angular/core';
import { ApiService} from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'project';

  constructor(private apiService:ApiService){
    this.apiService.tryapi().subscribe(
      res => {
        console.log(res);
      }
    );
  }

  // try(){

  // }


}
