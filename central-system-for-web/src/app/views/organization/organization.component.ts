import { MatTable, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { OrganizationDialogComponent } from './organization-dialog/organization-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Organization } from 'src/app/models/Organization';
import { OrganizationService } from 'src/app/services/Organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {
  @ViewChild(MatTable)
  table: MatTable<any>;
  displayedColumns: string[] = [
    'id',
    'name',
    'legalEntity',
    'action',
  ];

  dataSource = [];
  constructor(public dialog: MatDialog,
    private organizationService: OrganizationService,
  ) { }

  ngOnInit(): void {
    this.LoadData();
  }

  openDialog(element: Organization | null): void {
    const dialogRef = this.dialog.open(OrganizationDialogComponent, {
      width: '250px',
      data:
        element === null
          ? {
            id: '',
            name: '',
            legalEntity: '',
          }
          : {
            id: element.id,
            name: element.name,
            legalEntity: element.legalEntity,
          },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        if (this.dataSource.map((p) => p.id).includes(result.id)) {
          this.organizationService.putOrganizations(result).subscribe(
            () => {
              this.LoadData();
            });
        } else {
          this.organizationService.postOrganizations(result).subscribe(
            () => {
              this.LoadData();
            });
        }
      }
    });
  }

  edit(element: Organization): void {
    this.openDialog(element);
  }

  delete(id: string): void {
    this.organizationService.deleteOrganizations(id).subscribe(
      () => {
        this.dataSource = this.dataSource.filter((p) => p.id !== id);
      });
  }
  LoadData() {
    this.organizationService.getOrganizations().subscribe(
      (organizations: Array<any>) => {
        this.dataSource = organizations;
      });
  }
}


