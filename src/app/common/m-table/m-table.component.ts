import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { MTableBase } from './m-table.base';

@Component({
  selector: 'app-m-table',
  templateUrl: './m-table.component.html',
  styleUrls: ['./m-table.component.css']
})
export class MTableComponent extends MTableBase implements OnInit, AfterViewInit {
  constructor() {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

  onSortChange(event: Sort) {

  }
}
