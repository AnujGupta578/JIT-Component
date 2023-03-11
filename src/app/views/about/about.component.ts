import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AppDialogComponent } from '../../components/app-dialog/app-dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAppDialog(): void {
    const dialogRef = this.dialog.open(AppDialogComponent, {
      height: '400px',
      width: '600px',
      data: { type: 'ACCOUNT', source: 'merge-account' }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {

      } else {

      }
    });

  }

}
