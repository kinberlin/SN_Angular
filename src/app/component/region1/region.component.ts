import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var window:any;

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {
  // public formValue!:FormGroup;
  formModal:any;

  constructor(public formBuilder:FormBuilder){}


  ngOninit(): void{

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    )

    // this.formValue = this.formBuilder.group({
    //   Label: ["",Validators.required]
    // });
  }
  openModal(){
    this.formModal.show();
  }
  closeModal(){
    this.formModal.hide();
  }

  onRegisterRegion(){

  }


}
