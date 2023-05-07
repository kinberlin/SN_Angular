import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Participant } from 'src/app/model/participant.model';
import { Region } from 'src/app/model/region.model';
import { ApiService } from 'src/app/service/api.service';

declare var window: any;
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent {
  ParticipantData!: any;
  RegionData!: any;
  fromModal: any;
  formValue!: FormGroup;
  showAdd!: boolean;
  temps!: number;
  showUpdate!: boolean;
  ParticipantModel: Participant = new Participant();
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    this.temps = -1;
    this.fromModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({

      age : [''], 
      nom : [''], 
      prenom : [''],
      email : [''],
      mdp : [''], 
      login : [''],
      region : [''],
      tel : [''], 
      etat : [''],
      cni : [''], 
      statut : [''], 
    })
    this.getParticipant();
    this.getRegion();

  }
  openModal() {
    this.fromModal.show();

  }
  doSomeThing() {
    this.fromModal.hide();
  }
  clickAddParticipant() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false
  }
  postParticipant() {
    this.ParticipantModel.age = this.formValue.value.age;
    this.ParticipantModel.nom = this.formValue.value.nom;
    this.ParticipantModel.prenom = this.formValue.value.prenom;
    this.ParticipantModel.email = this.formValue.value.email;
    this.ParticipantModel.mdp = this.formValue.value.mdp;
    this.ParticipantModel.login = this.formValue.value.login;
    this.ParticipantModel.region = this.formValue.value.region;
    this.ParticipantModel.tel = this.formValue.value.tel;
    this.ParticipantModel.etat = this.formValue.value.etat;
    this.ParticipantModel.cni = this.formValue.value.cni;
    this.ParticipantModel.statut = this.formValue.value.statut;
    this.api.postParticipant(this.ParticipantModel).subscribe(res => {
      console.log(res);
      console.log(this.ParticipantModel);
      alert('Participant Enregistree avec succcess')
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();

    },
      err => {
        alert("Echec de l'ajout");
      })
  }
  getParticipant() {
    this.api.getParticipant()
      .subscribe(res => {
        this.ParticipantData = res
      })
  }
  getRegion() {
    this.api.getRegion()
      .subscribe(res => {
        this.RegionData = res;
        console.log(res);
      })
  }

  deleteParticipant(Participant: any) {
    this.api.deleteParticipant(Participant.id)
      .subscribe(res => {
        alert(`Participant supprime`)
        this.getParticipant();
      })
  }
  modifierParticipant(Participant: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.ParticipantModel.id = Participant.id;
    this.temps = Participant.id;
    this.formValue.controls['age'].setValue(Participant.age);
    this.formValue.controls['nom'].setValue(Participant.nom);
    this.formValue.controls['prenom'].setValue(Participant.prenom);
    this.formValue.controls['email'].setValue(Participant.email);
    this.formValue.controls['mdp'].setValue(Participant.mdp);
    this.formValue.controls['login'].setValue(Participant.login);
    this.formValue.controls['etat'].setValue(Participant.age);
    this.formValue.controls['statut'].setValue(Participant.statut);
    this.formValue.controls['tel'].setValue(Participant.tel);
    this.formValue.controls['cni'].setValue(Participant.cni);

  }
  updateParticipant() {

    this.ParticipantModel.age = this.formValue.value.age;
    this.ParticipantModel.nom = this.formValue.value.nom;
    this.ParticipantModel.prenom = this.formValue.value.prenom;
    this.ParticipantModel.email = this.formValue.value.email;
    this.ParticipantModel.mdp = this.formValue.value.mdp;
    this.ParticipantModel.login = this.formValue.value.login;
    this.ParticipantModel.region = this.formValue.value.region;
    this.ParticipantModel.tel = this.formValue.value.tel;
    this.ParticipantModel.etat = this.formValue.value.etat;

    this.api.updateParticipant(this.ParticipantModel, this.temps)
      .subscribe(res => {
        alert('mise ajour effectue avec sucess');
        this.formValue.reset();
        let ref = document.getElementById("cancel");
        ref?.click();
        this.getParticipant();
      })
  }
}
