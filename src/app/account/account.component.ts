import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, AfterViewInit{

	 
	@Output() myOutput:EventEmitter<any>=
	 new EventEmitter(); 

	 @Input() editIndex:any;


  constructor(private modalService: NgbModal,
	private fb : FormBuilder) {

		

  }

  ngOnInit() {
     
	console.log(this.editIndex);
  }

  ngAfterViewInit()
  {
	console.log(this.editIndex);

  }

  

  myform = this.fb.group({

    Id : [''],
    name: ['']

  })

  closeResult = '';

  

  
  
 

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

	saveInformation()
	{
		this.myOutput.emit(this.myform.value);
		this.modalService.dismissAll();
	}

	opentest(index:any)
	{
		console.log(index);
		this.open(content as any);
	}


}
