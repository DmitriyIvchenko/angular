import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Button } from 'protractor';

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
        text1: 'Achieve the maximum speed possible',
        param: 'param1',
        button22: 'sdfsd'

    },
      {
          image: '/assets/images/user-color.svg',
          text: 'Customer Service Agent',
          text2: 'Achieve the maximum speed possible',
          param: 'param2'
     
      },
      {
        image: '/assets/images/user-color.svg',
        text: 'Virtual Assistant',
        text3: 'Achieve the maximum speed possible',
        param: 'param3'
       
    },
    {
        image: '/assets/images/smartphone.svg',
        text: 'Mobile Developers',
        text4: 'Achieve the maximum speed possible',
        param: 'param4'
     
    },
    {
        image: '/assets/images/monitor.svg',
        text: 'Web Developers',
        text5: 'Achieve the maximum speed possible',
        param: 'param5'
       
    },
    {
        image: '/assets/images/drawing.svg',
        text: 'Graphics & Desing',
        text6: 'Achieve the maximum speed possible',
        param: 'param6'
       
    },
    {
        image: '/assets/images/note.svg',
        text: 'Writing & Translation',
        text7: 'Achieve the maximum speed possible',
        param: 'param7'
        
       
    },
    {
        image: '/assets/images/briefcase.svg',
        text: 'Accountatns & Consultants',
        text8: 'Achieve the maximum speed possible',
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
