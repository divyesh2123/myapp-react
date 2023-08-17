import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent {

  listacount : any[] = [];

  closeResult = '';

	constructor(private modalService: NgbModal) {

    this.listacount.push({Id: 1, name: "test"})
    this.listacount.push({Id: 2, name: "test1"})
    this.listacount.push({Id: 3, name: "tes2"})
    this.listacount.push({Id: 4, name: "tes3"})
    this.listacount.push({Id: 5, name: "tes4"})
    
  }

	

}
