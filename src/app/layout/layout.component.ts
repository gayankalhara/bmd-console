import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

/**
 * Class representing an Layout Component.
 */
export class LayoutComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Welcome to Blue Mango Deals Console!!!';
  }

  ngOnInit() {
  }

}
