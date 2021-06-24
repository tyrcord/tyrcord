import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TypographyModule } from '@tyrcord/ui/typography';
import { LayoutModule } from '@tyrcord/ui/layout';

import { MenuComponent } from './menu/menu.component';
import { CounterComponent } from './counter/counter.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { TreeBounceComponent } from './components/tree-bounce/tree-bounce.component';

@NgModule({
  imports: [CommonModule, TypographyModule, LayoutModule, TranslateModule],
  exports: [MenuComponent, CounterComponent, FormFieldDirective, TreeBounceComponent],
  declarations: [MenuComponent, CounterComponent, FormFieldDirective, TreeBounceComponent],
})
export class UICoreModule {}
