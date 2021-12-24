import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChargePoint } from 'src/app/models/ChargePoint';
import { Organization } from 'src/app/models/Organization';
import { OrganizationService } from 'src/app/services/Organization.service';

@Component({
  selector: 'app-charge-point-dialog',
  templateUrl: './charge-point-dialog.component.html',
})
export class ChargePointDialogComponent implements OnInit {
  element: ChargePoint;
  isChange: boolean;

  organizations: Organization[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ChargePoint,
    public dialogRef: MatDialogRef<ChargePointDialogComponent>,
    private organizationService: OrganizationService,
  ) { }

  ngOnInit(): void {
    this.organizationService.getOrganizations().subscribe(
      (organizations: Array<any>) => {
        this.organizations = organizations;
      });
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
