import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalizationStore {
  private storageKey = 'user_language';
  private currentLanguage: string;

  onLanguageChange = new Subject<string>();

  retreiveUserLanguage(): string {
    if (this.currentLanguage) {
      return this.currentLanguage;
    } else if (typeof window.localStorage !== 'undefined') {
      return localStorage.getItem(this.storageKey);
    }
  }

  persistUserLanguage(language: string): void {
    this.currentLanguage = language;

    if (typeof window.localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, language);
    }

    this.onLanguageChange.next(language);
  }
}
