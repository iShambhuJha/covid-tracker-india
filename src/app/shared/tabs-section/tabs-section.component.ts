import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabs-section',
  templateUrl: './tabs-section.component.html',
  styleUrls: ['./tabs-section.component.scss']
})
export class TabsSectionComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(public router:Router) {
    this.navLinks = [
      {
          label: 'Overview',
          link: './dashboard',
          index: 0
      }, {
          label: 'States',
          link: './dashboard',
          index: 1
      }, {
          label: 'Districts',
          link: './dashboard',
          index: 2
      }, 
      {
        label: 'Resources',
        link: './test',
        index: 2
    }, 
  ];
   }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

}
