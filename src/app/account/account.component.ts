import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
	private fb : FormBuilder,public activeModal: NgbActiveModal) {

		

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

  

  
  
 

 
	saveInformation()
	{
		this.myOutput.emit(this.myform.value);
		this.modalService.dismissAll();
	}

	opentest(index:any)
	{
		console.log(index);
		
	}


}
