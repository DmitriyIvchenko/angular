import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-homepage-PopularJobAreas',
    templateUrl: './PopularJobAreas.component.html',
    styleUrls: ['./PopularJobAreas.component.scss'],
})
export class PopularJobAreasComponent implements OnInit, OnDestroy {

masiv = [
    {
        image: '/assets/images/presentation.svg',
        text: 'Sales & Marketing Experts',
        param: 'param1'

    },
      {
          image: '/assets/images/user-color.svg',
          text: 'Customer Service Agent',
          param: 'param2'
     
      },
      {
        image: '/assets/images/user-color.svg',
        text: 'Virtual Assistant',
        param: 'param3'
       
    },
    {
        image: '/assets/images/smartphone.svg',
        text: 'Mobile Developers',
        param: 'param4'
     
    },
    {
        image: '/assets/images/monitor.svg',
        text: 'Web Developers',
        param: 'param5'
       
    },
    {
        image: '/assets/images/drawing.svg',
        text: 'Graphics & Desing',
        param: 'param6'
       
    },
    {
        image: '/assets/images/note.svg',
        text: 'Writing & Translation',
        param: 'param7'
       
    },
    {
        image: '/assets/images/briefcase.svg',
        text: 'Accountatns & Consultants',
        param: 'param8'
    },
    ];

    constructor(
    ) {}

    ngOnInit() {
    
    }

    ngOnDestroy() {
       
    }

    
}
