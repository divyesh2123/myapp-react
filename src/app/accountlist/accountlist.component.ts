import { Component, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent {

  @ViewChild('child') child:AccountComponent | undefined;

  listacount : any[] = [];

  index:number = -1;

  closeResult = '';

	constructor(private modalService: NgbModal) {

    this.listacount.push({Id: 1, name: "test"})
    this.listacount.push({Id: 2, name: "test1"})
    this.listacount.push({Id: 3, name: "tes2"})
    this.listacount.push({Id: 4, name: "tes3"})
    this.listacount.push({Id: 5, name: "tes4"})
    
  }

  addItems(da: any)
  {
    this.listacount.push(da);
  }

  deleteInfo(index:number)
  {
    this.listacount.splice(index,1);
  }

  editData(a:number)
  {
    this.index = a;
    this.child?.opentest(a);
  
  }
	

}
