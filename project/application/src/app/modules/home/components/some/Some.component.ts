import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'app-homepage-Some',
    templateUrl: './Some.component.html',
    styleUrls: ['./Some.component.scss'],
})
export class SomeComponent implements OnInit, OnDestroy {

    @Input() image = '';
    @Input() text = '';
    @Input() param = '';
    @Input() text1 = '';
    @Input() text2 = '';
    @Input() text3 = '';
    @Input() text4 = '';
    @Input() text5 = '';
    @Input() text6 = '';
    @Input() text7 = '';
    @Input() text8 = '';
    @Input() button22 = '';


    public isActive = false;
    

    constructor(
    ) {}

    ngOnInit() {
        console.log(this.param);
    }

    ngOnDestroy() {
       
    }
    mouseenter() {
        this.isActive = true;
    }
    mouseleave() {
        this.isActive = false;
    }
}
