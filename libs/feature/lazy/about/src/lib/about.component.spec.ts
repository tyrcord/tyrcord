import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UITypographyModule, SubheadComponent } from '@tyrcord/ui/typography';
import { TranslatePipeMock } from '@tyrcord/testing';
import { UILayoutModule } from '@tyrcord/ui/layout';
import { UICoreModule } from '@tyrcord/ui/core';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          defaultLanguage: 'en',
        }),
        UICoreModule,
        UITypographyModule,
        UILayoutModule,
      ],
      declarations: [AboutComponent],
      providers: [{ provide: TranslatePipe, useClass: TranslatePipeMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display `TITLES.WHO_ARE_WE` title', () => {
    const subheadDebug: DebugElement = fixture.debugElement.query(
      By.directive(SubheadComponent)
    );
    const subhead: HTMLElement = subheadDebug.nativeElement;

    expect(subhead.textContent.trim()).toEqual('TITLES.WHO_ARE_WE');
  });
});
