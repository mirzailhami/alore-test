import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
    nullValueValidator(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value && !control.value.trim().length) {
          return { nullValue: true };
        }
        return null;
      }
}