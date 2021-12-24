import { Organization } from '../../../models/Organization';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-organization-dialog',
  templateUrl: './organization-dialog.component.html',
})
export class OrganizationDialogComponent implements OnInit {
  element: Organization;
  isChange: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Organization,
    public dialogRef: MatDialogRef<OrganizationDialogComponent>
  ) { }

  ngOnInit(): void {
    if (this.data.id != "") {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
