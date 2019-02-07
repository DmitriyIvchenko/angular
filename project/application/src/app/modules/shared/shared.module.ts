import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationModule } from 'angular-l10n';

import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [LocalizationModule, CommonModule],
    exports: [LocalizationModule, CommonModule, HeaderComponent, BodyComponent, FooterComponent],
    declarations: [HeaderComponent, BodyComponent, FooterComponent],
})
export class SharedModule {}

