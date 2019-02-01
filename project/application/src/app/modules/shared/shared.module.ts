import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationModule } from 'angular-l10n';

import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
@NgModule({
    imports: [LocalizationModule, CommonModule],
    exports: [LocalizationModule, CommonModule, HeaderComponent, BodyComponent],
    declarations: [HeaderComponent, BodyComponent],
})
export class SharedModule {}

