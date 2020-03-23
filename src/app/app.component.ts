import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { BudgetItem } from 'src/shared/models/budget-item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal-app';
  budgetItems: BudgetItem[] = new Array<BudgetItem>();

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
  }

  deleteItem(item:BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1); //1 porque es un solo item de la lista que queremos eliminar
  }

  openDialog(){
    let dialogRef = this.dialog.open(MyDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}



