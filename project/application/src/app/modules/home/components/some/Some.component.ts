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
