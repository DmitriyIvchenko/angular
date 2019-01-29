import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationModule } from 'angular-l10n';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [LocalizationModule, CommonModule],
    exports: [LocalizationModule, CommonModule, HeaderComponent],
    declarations: [HeaderComponent],
})
export class SharedModule {}
