import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { from } from 'rxjs';
import { Abonne } from 'src/app/model/abonne.model';
import { ApiService } from 'src/app/service/api.service';


declare var window:any;
@Component({
  selector: 'app-abonne',
  templateUrl: './abonne.component.html',
  styleUrls: ['./abonne.component.scss']
})
export class AbonneComponent {
  abonneData!: any;
  fromModal:any;
  formValue!:FormGroup;
  showAdd!: boolean;
  temps!:number;
  showUpdate!: boolean;
  abonneModel: Abonne =new Abonne();
  constructor(private formbuilder: FormBuilder,private api: ApiService){}

  ngOnInit(): void{

    this.temps = -1;
    this.fromModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      nom : [''],
      prenom : [''],
      sexe : [''],
      profession : [''],
      rue : [''],
      code_postal : [''],
      ville : [''],
      pays : [''],
      email : [''],
      telephone : [''],
      age : [''],
      motivation : [''],
    })
    this.getabonne();

  }
  openModal(){
    this.fromModal.show();

  }
  doSomeThing(){
    this.fromModal.hide();
  }
  clickAddabonne(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate= false
  }
  postabonne(){
    this.abonneModel.nom = this.formValue.value.nom;
    this.abonneModel.prenom = this.formValue.value.prenom;
    this.abonneModel.sexe = this.formValue.value.sexe;
    this.abonneModel.profession = this.formValue.value.profession;
    this.abonneModel.rue = this.formValue.value.rue;
    this.abonneModel.code_postal = this.formValue.value.code_postal;
    this.abonneModel.ville = this.formValue.value.ville;
    this.abonneModel.pays = this.formValue.value.pays;
    this.abonneModel.email = this.formValue.value.email;
    this.abonneModel.telephone = this.formValue.value.telephone;
    this.abonneModel.age = this.formValue.value.age;
    this.abonneModel.motivation = this.formValue.value.motivation;
    this.api.postAbonne(this.abonneModel).subscribe(res=>{
      console.log(res);
      console.log(this.abonneModel);
      alert('abonne Enregistree avec succcess')
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();

    },
    err=>{
      console.log(this.abonneModel);
      alert("Echec de l'ajout");
    })
  }
  getabonne(){
    this.api.getAbonne()
    .subscribe(res=>{
      this.abonneData=res
    })
  }

  deleteabonne(abonne: any){
    this.api.deleteAbonne(abonne.id)
    .subscribe(res=>{
      alert(`abonne supprime`)
      this.getabonne();
    })
  }
  modifierabonne(abonne:any){
    this.showAdd = false;
    this.showUpdate= true;
    this.abonneModel.id =abonne.id;
    this.temps = abonne.id;
    this.formValue.controls['nom'].setValue(abonne.nom);
    this.formValue.controls['prenom'].setValue(abonne.prenom);
    this.formValue.controls['sexe'].setValue(abonne.sexe);
    this.formValue.controls['profession'].setValue(abonne.profession);
    this.formValue.controls['rue'].setValue(abonne.rue);
    this.formValue.controls['code_postal'].setValue(abonne.code_postal);
    this.formValue.controls['ville'].setValue(abonne.ville);
    this.formValue.controls['pays'].setValue(abonne.pays);
    this.formValue.controls['email'].setValue(abonne.email);
    this.formValue.controls['telephone'].setValue(abonne.telephone);
    this.formValue.controls['age'].setValue(abonne.age);
    this.formValue.controls['motivation'].setValue(abonne.motivation);

  }
  updateabonne(){
    this.abonneModel.nom = this.formValue.value.nom;
    this.abonneModel.prenom = this.formValue.value.prenom;
    this.abonneModel.sexe = this.formValue.value.sexe;
    this.abonneModel.profession = this.formValue.value.profession;
    this.abonneModel.rue = this.formValue.value.rue;
    this.abonneModel.code_postal = this.formValue.value.code_postal;
    this.abonneModel.ville = this.formValue.value.ville;
    this.abonneModel.pays = this.formValue.value.pays;
    this.abonneModel.email = this.formValue.value.email;
    this.abonneModel.telephone = this.formValue.value.telephone;
    this.abonneModel.age = this.formValue.value.age;
    this.abonneModel.motivation = this.formValue.value.motivation;
    this.api.updateAbonne(this.abonneModel,this.temps)
    .subscribe(res=>{
      alert('mise ajour effectue avec sucess');
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();
      this.getabonne();
    })
  }
}
