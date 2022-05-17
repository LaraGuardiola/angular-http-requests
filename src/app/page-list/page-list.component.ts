import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  @Input() pages: any[] = [] //receiving data from parent
  xss = '<img src="" onerror="alert(123)"/>';

  constructor() { }

  ngOnInit(): void {
  }

}
