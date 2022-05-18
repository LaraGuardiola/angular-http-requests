import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { WikipediaResponse } from './wikipedia.service';

//to use a service first import it

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages:any[] = []

  constructor(private wikipedia: WikipediaService) {}

  //creates a singleton instance of the WikipediaService

  onTerm(term: string){
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages
    })
  }
}
