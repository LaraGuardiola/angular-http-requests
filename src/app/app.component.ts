import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

//to use a service first import it

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private wikipedia: WikipediaService) {

  }

  //creates a singleton instance of the WikipediaService

  onTerm(term: any){
    const results = this.wikipedia.search(term);
    console.log(results);
  }
}
