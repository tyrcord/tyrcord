import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TypographyModule } from '@tyrcord/ui/typography';
import { LayoutModule } from '@tyrcord/ui/layout';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, TypographyModule, LayoutModule, TranslateModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
})
export class UICoreModule {}
