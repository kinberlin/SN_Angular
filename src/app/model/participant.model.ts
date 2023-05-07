
import { Region } from './region.model';

export class Participant {

    public id?: number;
    public age?: number;
    public region?: Region;
    public prenom?:string;
    public tel?:string;
    public login?:string;
    public mdp?:string;
    public statut?:string;
    public email?:string;
    public etat?:string;
    public nom?:string;
    public cni?:string;

    public constructor() {
        
    }
}
/*
export class Participant {
  public id?:number;
  public nom?:number;
  public num_cni?:string;
  public age?:number;
  public sexe?:string;
  public status?:string;
  public login?:string;
  public password?:string;
  public etat?:string;
  public telephone?:string;
  public id_region?:Region;

  public constructor() {

  }
}*/
