import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'translate',
    standalone: false
})
export class TranslatePipeMock implements PipeTransform {
  public name = 'translate';

  public transform(query: string): any {
    return query;
  }
}
