import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Segment } from 'src/app/model/data.model';
import { CrudService } from 'src/app/services/crud.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-add-segment',
  templateUrl: './add-segment.component.html',
  styleUrls: ['./add-segment.component.scss']
})
export class AddSegmentComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40), this.utils.nullValueValidator]],
    icon: ['🤙'],
    description: ['', [Validators.maxLength(250), this.utils.nullValueValidator]],
  });

  showEmoji = false;

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
    public dialogRef: MatDialogRef<AddSegmentComponent>,
    private crud: CrudService) { }

  ngOnInit(): void {
  }

  addEmoji(emoji: any) {
    console.log(emoji);
    this.form.controls.icon.setValue(emoji.emoji.native);
    this.showEmoji = false;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    this.crud.addSegment({...this.form.value, id: new Date().getTime()} as Segment);
    this.dialogRef.close({...this.form.value});
  }

}
