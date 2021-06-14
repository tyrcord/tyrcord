import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EasterEggService {
  private static secret = 'tyrc0rd';

  private keylogger = '';

  constructor(private router: Router) {}
  
  static getAppSecret(): string {
    return this.secret;
  }

  registerKeyEvent({ target, key }: KeyboardEvent): void {
    if (target === document.body) {
      const secret = EasterEggService.secret;
      this.keylogger += key;

      if (
        secret.startsWith(this.keylogger) &&
        secret.length >= this.keylogger.length
      ) {
        if (secret === this.keylogger) {
          this.navigateToSurprise(this.keylogger);
          this.reset();
        }

        return;
      }
    }

    this.reset();
  }

  private reset(): void {
    this.keylogger = '';
  }

  private navigateToSurprise(secret: string) {
    this.router.navigate(['/secret'], { state: { secret } });
  }
}
