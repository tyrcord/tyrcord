import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

import { ContactFormErrorOptions } from '../../types';
import { MessageStatus } from '../../models';

@Component({
  selector: 'tyrcord-feature-lazy-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  nameMaxLength = 100;
  nameMinLength = 3;

  messageMaxLength = 1_000;
  messageMinLength = 60;

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [
      Validators.maxLength(this.nameMaxLength),
      Validators.minLength(this.nameMinLength),
      Validators.required,
    ]),
    message: new FormControl('', [
      Validators.maxLength(this.messageMaxLength),
      Validators.minLength(this.messageMinLength),
      Validators.required,
    ]),
  });

  messageStatus = new MessageStatus();

  get name(): AbstractControl {
    return this.contactForm.get('name');
  }

  get email(): AbstractControl {
    return this.contactForm.get('email');
  }

  get message(): AbstractControl {
    return this.contactForm.get('message');
  }

  get nameErrorMessage(): Observable<string> {
    return this.getErrorMessageForControl(this.name, {
      maxLength: this.nameMaxLength,
      minLength: this.nameMinLength,
    });
  }

  get emailErrorMessage(): Observable<string> {
    return this.getErrorMessageForControl(this.email);
  }

  get messageErrorMessage(): Observable<string> {
    return this.getErrorMessageForControl(this.message, {
      maxLength: this.messageMaxLength,
      minLength: this.messageMinLength,
    });
  }

  constructor(private translate: TranslateService) {}

  onReset() {
    this.contactForm.reset();
  }
  
  async onSubmit(): Promise<void> {
    if (this.contactForm.valid && !this.messageStatus.sending) {
      this.messageStatus.sending = true;
      this.lockControls();
      
      // todo

      this.messageStatus.sent = true;
      this.unlockControls();
    }
  }

  private lockControls() {
    Object.keys(this.contactForm.controls).forEach((key: string) => {
      this.contactForm.controls[key].disable();
    })
  }

  private unlockControls() {
    Object.keys(this.contactForm.controls).forEach((key: string) => {
      this.contactForm.controls[key].enable();
    })
  }

  private getErrorMessageForControl(
    control: AbstractControl,
    options?: ContactFormErrorOptions,
  ): Observable<string> {
    if (control.errors?.minlength?.requiredLength) {
      return this.translate.get('ERRORS.FIELD.MIN_LENGTH', {
        min: options.minLength,
      });
    } else if (control.errors?.maxlength?.requiredLength) {
      return this.translate.get('ERRORS.FIELD.MAX_LENGTH', {
        max: options.maxLength,
      });
    } else if (control.errors?.email) {
      return this.translate.get('ERRORS.FIELD.EMAIL_INVALID');
    } else if (control.errors?.required) {
      return this.translate.get('ERRORS.FIELD.REQUIRED');
    }

    return this.translate.get('ERRORS.FIELD.UNKNOWN');
  }
}
