import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { pluck } from 'rxjs/operators'

/*interface Car {
  year: number,
  color: string,
  running: boolean,
  make: {
    name: string,
    dateCreated: Date
  }
}
const observable = new Observable<Car>(observer => {
  observer.next({
    year: 2000,
    color: 'red',
    running: true,
    make: {
      name: 'Chevy',
      dateCreated: new Date(2000,12,28)
    }
  })
}).pipe(
  pluck('make','dateCreated')
)

observable.subscribe((value) => {
  console.log(value)
})*/

//to anotate an array of objects we use {}[] annotation
//prepares the response to an specified type WikipediaResponse

export interface WikipediaResponse {
  query: {
    search: {
      title: string,
      snippet: string,
      pageid: number
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        format: 'json',
        srsearch: term,
        utf8: '1',
        origin: '*'
      }
    }).pipe(
      pluck('query','search')
    )
  }
}
