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

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  openVideoPopup(link:any) {
    const modalRef = this.modalService.open(AccountComponent);
   
   
    // modalRef.componentInstance.src = link;
  }

	

}
