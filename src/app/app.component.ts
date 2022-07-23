import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AddSegmentComponent } from './components/add-segment/add-segment.component';
import { AddTableComponent } from './components/add-table/add-table.component';
import { Segment } from './model/data.model';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  segments: Segment[];
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public dialog: MatDialog,
    public crud: CrudService
  ) {
    this.matIconRegistry.addSvgIcon(`list`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-list.svg"));
    this.matIconRegistry.addSvgIcon(`more`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-more.svg"));
    this.matIconRegistry.addSvgIcon(`notif`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-notif.svg"));
    this.matIconRegistry.addSvgIcon(`avatar`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-avatar.svg"));
    this.matIconRegistry.addSvgIcon(`list-view`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-list-view.svg"));

    this.segments = this.crud.getSegment;
    console.log(this.segments);
  }

  showModal(type: number = 0, data: any = {}) {
    const modal: any = [AddSegmentComponent, AddTableComponent]
    const dialog = this.dialog.open(modal[type], {
      width: '550px',
      panelClass: 'dialog-container',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && type === 1) {
        this.segments.find(t => t.id === data.id)?.table?.push(result);
      } else {
        this.segments.push(result);
      }
    });
  }
}
