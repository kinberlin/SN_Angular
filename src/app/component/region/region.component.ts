import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { from } from 'rxjs';
import { Region } from 'src/app/model/region.model';
import { ApiService } from 'src/app/service/api.service';


declare var window:any;
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  RegionData!: any;
  fromModal:any;
  formValue!:FormGroup;
  showAdd!: boolean;
  temps!:number;
  showUpdate!: boolean;
  regionModel: Region =new Region();
  constructor(private formbuilder: FormBuilder,private api: ApiService){}

  ngOnInit(): void{

    this.temps = -1;
    this.fromModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      label : [''],
    })
    this.getRegion();

  }
  openModal(){
    this.fromModal.show();

  }
  doSomeThing(){
    this.fromModal.hide();
  }
  clickAddRegion(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate= false
  }
  postRegion(){
    this.regionModel.label = this.formValue.value.label;
    this.api.postRegion(this.regionModel).subscribe(res=>{
      console.log(res);
      console.log(this.regionModel);
      alert('Region Enregistree avec succcess')
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();

    },
    err=>{
      alert("Echec de l'ajout");
    })
  }
  getRegion(){
    this.api.getRegion()
    .subscribe(res=>{
      this.RegionData=res
    })
  }

  deleteRegion(region: any){
    this.api.deleteRegion(region.id)
    .subscribe(res=>{
      alert(`region supprime`)
      this.getRegion();
    })
  }
  modifierRegion(region:any){
    this.showAdd = false;
    this.showUpdate= true;
    this.regionModel.id =region.id;
    this.temps = region.id;
    this.formValue.controls['label'].setValue(region.label);

  }
  updateRegion(){

    this.regionModel.label = this.formValue.value.label;

    this.api.updateRegion(this.regionModel,this.temps)
    .subscribe(res=>{
      alert('mise ajour effectue avec sucess');
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();
      this.getRegion();
    })
  }
}
