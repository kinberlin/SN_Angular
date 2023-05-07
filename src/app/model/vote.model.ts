import { Bulletin } from "./bulletin.model";
import { Election } from "./election.model";
import { Participant } from "./participant.model";

export class Vote {
  public id?: number;
  public label?:string;
  public participant?: Participant;
  public bulletin?: Bulletin;
  public election?: Election;

  public constructor() {

  }
}
/*
export class Vote {
  public id?:number;
  public label?:string;
  public id_participant?:Participant;
  public id_election?:Election;
  public id_bulletin?:Bulletin;

  public constructor() {

  }
}*/
