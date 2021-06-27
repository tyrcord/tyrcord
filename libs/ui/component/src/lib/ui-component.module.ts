import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UITypographyModule } from '@tyrcord/ui/typography';
import { UILayoutModule } from '@tyrcord/ui/layout';

import {
  MenuComponent,
  CounterComponent,
  TreeBounceComponent,
} from './components';

@NgModule({
  imports: [CommonModule, TranslateModule, UITypographyModule, UILayoutModule],
  exports: [MenuComponent, CounterComponent, TreeBounceComponent],
  declarations: [MenuComponent, CounterComponent, TreeBounceComponent],
})
export class UIComponentModule {}
