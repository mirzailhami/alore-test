import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Segment, Table } from 'src/app/model/data.model';
import { CrudService } from 'src/app/services/crud.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddSegmentComponent } from '../add-segment/add-segment.component';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40), this.utils.nullValueValidator]],
    icon: ['🤙'],
    color: ['rgba(51, 75, 250, 1)'],
  });

  showEmoji = false;
  colorPalette = [
    'rgba(207, 223, 255, 1)', 'rgba(156, 199, 255, 1)', 'rgba(45, 127, 249, 1)', 'rgba(0, 103, 255, 1)', 'rgba(0, 84, 209, 1)',
    'rgba(208, 240, 253, 1)', 'rgba(119, 209, 243, 1)', 'rgba(24, 191, 255, 1)', 'rgba(64, 131, 172, 1)', 'rgba(11, 118, 183, 1)',
    'rgba(194, 245, 233, 1)', 'rgba(114, 221, 195, 1)', 'rgba(32, 217, 210, 1)', 'rgba(123, 200, 195, 1)', 'rgba(6, 160, 155, 1)',
    'rgba(255, 179, 200, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 0, 73, 1)', 'rgba(218, 2, 64, 1)',
    'rgba(255, 227, 175, 1)', 'rgba(255, 214, 140, 1)', 'rgba(255, 197, 92, 1)', 'rgba(253, 178, 43, 1)', 'rgba(232, 149, 0, 1)',
    'rgba(255, 159, 242, 1)', 'rgba(254, 103, 233, 1)', 'rgba(246, 56, 220, 1)', 'rgba(255, 0, 220, 1)', 'rgba(214, 0, 184, 1)',
    'rgba(255, 181, 152, 1)', 'rgba(255, 158, 121, 1)', 'rgba(255, 120, 68, 1)', 'rgba(255, 71, 0, 1)', 'rgba(197, 55, 0, 1)',
    'rgba(175, 181, 255, 1)', 'rgba(142, 150, 255, 1)', 'rgba(107, 118, 255, 1)', 'rgba(49, 64, 255, 1)', 'rgba(0, 19, 255, 1)',
    'rgba(131, 204, 139, 1)', 'rgba(97, 199, 108, 1)', 'rgba(32, 201, 51, 1)', 'rgba(0, 181, 20, 1)', 'rgba(51, 138, 23, 1)',
    'rgba(238, 238, 238, 1)', 'rgba(204, 204, 204, 1)', 'rgba(172, 172, 172, 1)', 'rgba(102, 102, 102, 1)', 'rgba(68, 68, 68, 1)'
    ];

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
    public dialogRef: MatDialogRef<AddSegmentComponent>,
    private crud: CrudService,
    @Inject(MAT_DIALOG_DATA) public segment: Segment) { }

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

    const newTable = {...this.form.value, id: new Date().getTime()} as Table;
    this.crud.addTable(this.segment.id, newTable);
    this.dialogRef.close(newTable);
  }

}
