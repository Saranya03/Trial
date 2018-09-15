import { Component,OnInit } from '@angular/core';
import { ApiService } from './_services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sampleProject';

  constructor(private apiService : ApiService){

  }

  ngOnInit(){
    this.apiService.getLeaderboardData().subscribe(
      res => {
        console.log(res);
      }
    );

    this.apiService.getJudgeData(1).subscribe(
      res => {
        console.log(res);
      }
    );
    
  }

}
