import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

import {
    HeaderComponent
} from './components'

@NgModule({
    imports: [HomeRoutingModule, SharedModule],
    declarations: [HomeComponent, HeaderComponent],
    providers: [HeaderComponent]
})
export class HomeModule {}
