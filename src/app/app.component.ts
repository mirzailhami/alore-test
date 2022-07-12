import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { AddSegmentComponent } from './components/add-segment/add-segment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alore-test';

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    this.matIconRegistry.addSvgIcon(`list`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-list.svg"));
    this.matIconRegistry.addSvgIcon(`more`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-more.svg"));
    this.matIconRegistry.addSvgIcon(`notif`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-notif.svg"));
    this.matIconRegistry.addSvgIcon(`avatar`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-avatar.svg"));
    this.matIconRegistry.addSvgIcon(`list-view`, this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-list-view.svg"));
  }

  addSegmentModal() {
    this.dialog.open(AddSegmentComponent, {
      width: '550px'
    });
  }
}
