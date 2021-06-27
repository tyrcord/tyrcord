import { CanActivate, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EasterEggService } from '@tyrcord/feature/shared/logic/services';

@Injectable()
export class Gatekeeper implements CanActivate {
  constructor(private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const { secret } = this.router.getCurrentNavigation().extras.state ?? {};

    if (secret === EasterEggService.getAppSecret()) {
      return true;
    }

    return this.router.parseUrl('/');
  }
}
