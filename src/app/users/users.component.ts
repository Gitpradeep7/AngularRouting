import { Component, ViewChild } from '@angular/core';
import { NetworkService } from '../network.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['username', 'name', 'phone', 'website'];
  dataSource:any=[];
  isLoading:boolean = true;
  @ViewChild('paginator') paginator :MatPaginator | undefined;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator | undefined;

  constructor(private nt:NetworkService){
    
  }
  ngOnInit(){
    this.isLoading = true;
    setTimeout(()=>{
    this.nt.getURL().subscribe((res:any)=>{
      this.dataSource =new MatTableDataSource( res);
      
    })
    this.isLoading = false;
  },2000)
  }
  ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.paginatorPageSize = this.paginatorPageSize;
  }
}
