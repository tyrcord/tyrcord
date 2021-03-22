import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { IMenuOption } from '../interfaces';

@Component({
  selector: 'tyrcord-ui-core-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnDestroy {
  private subscription: Subscription;

  @HostBinding('class.has-menu-opened')
  hasMenuOpened = false;

  @Output()
  optionChange: EventEmitter<IMenuOption> = new EventEmitter();

  @Input()
  options: IMenuOption[] = [];

  constructor(private elementRef: ElementRef, private router: Router) {
    this.subscription = router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => this.closeMenu());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    if (
      this.hasMenuOpened &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.closeMenu();
  }

  onToggleMenu(): void {
    this.hasMenuOpened = !this.hasMenuOpened;
  }

  onOptionChange(option: IMenuOption): void {
    this.optionChange.emit(option);
    this.closeMenu();
  }

  private closeMenu(): void {
    if (this.hasMenuOpened) {
      this.hasMenuOpened = false;
    }
  }
}
