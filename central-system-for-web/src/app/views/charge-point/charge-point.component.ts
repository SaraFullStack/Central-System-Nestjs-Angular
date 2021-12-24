import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ChargePoint } from 'src/app/models/ChargePoint';
import { ChargePointService } from 'src/app/services/ChargePoint.service';
import { ChargePointDialogComponent } from './charge-point-dialog/charge-point-dialog.component';

@Component({
  selector: 'app-charge-point',
  templateUrl: './charge-point.component.html',
  styleUrls: ['./charge-point.component.scss']
})
export class ChargePointComponent implements OnInit {
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
    private chargePointService: ChargePointService,
  ) { }

  ngOnInit(): void {
    this.LoadData();
  }

  openDialog(element: ChargePoint | null): void {
    const dialogRef = this.dialog.open(ChargePointDialogComponent, {
      width: '250px',
      data:
        element === null
          ? {
            id: '',
            identity: '',
            cpo: null,
          }
          : {
            id: element.id,
            identity: element.identity,
            cpo: element.cpo.id,
          },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        if (this.dataSource.map((p) => p.id).includes(result.id)) {
          this.chargePointService.putOrganizations(result).subscribe(
            () => {
              this.LoadData();
            });
        } else {
          this.chargePointService.postOrganizations(result).subscribe(
            () => {
              this.LoadData();
            });
        }
      }
    });
  }

  edit(element: ChargePoint): void {
    this.openDialog(element);
  }

  delete(id: string): void {
    this.chargePointService.deleteOrganizations(id).subscribe(
      () => {
        this.dataSource = this.dataSource.filter((p) => p.id !== id);
      });
  }
  LoadData() {
    this.chargePointService.getOrganizations().subscribe(
      (organizations: Array<any>) => {
        this.dataSource = organizations;
      });
  }
}
