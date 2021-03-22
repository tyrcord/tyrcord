import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationServiceConfig } from './models';
import { LocalizationStore } from './persistances';
import { LocalizationService } from './services';

@NgModule({
  imports: [CommonModule],
})
export class LocalizationModule {
  constructor(private localizationService: LocalizationService) {}

  static forRoot(
    config: LocalizationServiceConfig = {}
  ): ModuleWithProviders<LocalizationModule> {
    return {
      ngModule: LocalizationModule,
      providers: [
        { provide: LocalizationServiceConfig, useValue: config },
        LocalizationStore,
        LocalizationService,
      ],
    };
  }

  static forChild(
    config: LocalizationServiceConfig = {}
  ): ModuleWithProviders<LocalizationModule> {
    return {
      ngModule: LocalizationModule,
      providers: [
        { provide: LocalizationServiceConfig, useValue: config },
        LocalizationService,
      ],
    };
  }
}
