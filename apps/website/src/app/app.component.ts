import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalizationService } from '@tyrcord/feature/shared/localization';
import { EasterEggService } from '@tyrcord/feature/shared/logic/services';
import { IMenuOption } from '@tyrcord/ui/component';

import {
  kEnglishShortText,
  kFrenchShortText,
  kLanguageText,
} from './constants';

@Component({
    selector: 'tyrcord-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  private defaultMenuOptions: IMenuOption[] = [
    {
      label: 'TITLES.ABOUT_US',
      value: 'about',
    },
    {
      label: 'TITLES.APPS',
      value: 'apps',
    },
    {
      label: 'TITLES.CONTACT',
      value: 'contact',
    },
  ];

  private englishLanguageOption: IMenuOption = {
    label: 'EN',
    value: kLanguageText,
  };

  private frenchLanguageOption: IMenuOption = {
    label: 'FR',
    value: kLanguageText,
  };

  menuOptions: IMenuOption[];

  private get currentLanguage(): string {
    return this.localizationService.userLanguage;
  }

  constructor(
    private localizationService: LocalizationService,
    private easterEggService: EasterEggService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateLanguageOption();
  }

  onOptionChange(option: IMenuOption): void {
    if (option.value !== kLanguageText) {
      this.router.navigate([option.value]);
    } else if (option.value === kLanguageText) {
      this.toggleLanguage();
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    this.easterEggService.registerKeyEvent(event);
  }

  private toggleLanguage(): void {
    this.localizationService.useLanguage(
      this.currentLanguage == kEnglishShortText
        ? kFrenchShortText
        : kEnglishShortText
    );

    this.updateLanguageOption();
  }

  private updateLanguageOption(): void {
    if (this.currentLanguage == kEnglishShortText) {
      this.menuOptions = [
        ...this.defaultMenuOptions,
        this.frenchLanguageOption,
      ];
    } else {
      this.menuOptions = [
        ...this.defaultMenuOptions,
        this.englishLanguageOption,
      ];
    }
  }
}
