import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.scss']
})
export class AddSegmentComponent implements OnInit {
  form = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(40), this.utils.nullValueValidator]],
    icon: [null],
    description: [null, [Validators.maxLength(250)]],
  });

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
    public dialogRef: MatDialogRef<AddSegmentComponent>) { }

  ngOnInit(): void {
  }

  addEmoji(emoji: any) {
    console.log(emoji);
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.dialogRef.close({...this.form.value});
  }

}
