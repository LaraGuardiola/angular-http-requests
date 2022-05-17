import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//importing EventEmitter and Output for allowing comnunication between child to parent components

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<any>()
  term : any;
;
  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: any){
    this.term = value as HTMLElement;
    console.log(this.term)
  }

  onFormSubmit(event: any){ 
    event.preventDefault();
    this.submitted.emit(this.term)
  }

}
