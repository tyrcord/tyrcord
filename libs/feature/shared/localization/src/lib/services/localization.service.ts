import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

import { LocalizationServiceConfig } from '../models';
import { LocalizationStore } from '../persistances';

@Injectable()
export class LocalizationService {
  private supportedLanguages: string[] = ['en'];
  private defaultLanguage = 'en';

  private currentLanguage: string;

  get userLanguage(): string {
    return (
      this.currentLanguage ??
      this.store.retreiveUserLanguage() ??
      this.getBrowserLanguage() ??
      this.defaultLanguage
    );
  }

  constructor(
    private translateService: TranslateService,
    private store: LocalizationStore,
    config: LocalizationServiceConfig
  ) {
    const { supportedLanguages, defaultLanguage } = config;
    this.supportedLanguages = supportedLanguages ?? this.supportedLanguages;
    this.defaultLanguage = defaultLanguage ?? this.defaultLanguage;

    this.store.onLanguageChange.subscribe(this.onLanguageChange);
    this.useLanguage(this.userLanguage);
  }

  public useLanguage(language: string): void {
    if (
      language !== this.currentLanguage &&
      this.isLanguageSupported(language)
    ) {
      this.currentLanguage = language;
      this.store.persistUserLanguage(language);
    }
  }

  private onLanguageChange = (language: string): void => {
    if (this.isLanguageSupported(language)) {
      this.translateService.use(language);
    }
  };

  private isLanguageSupported(language: string): boolean {
    return this.supportedLanguages.includes(language);
  }

  private getBrowserLanguage(): string {
    const browserLanguage = this.translateService.getBrowserLang();

    if (this.isLanguageSupported(browserLanguage)) {
      return browserLanguage;
    }
  }
}
