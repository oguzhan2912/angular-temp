export class ContactInfo {
  id:number;
  country:string[];
  city:string[];
  district:string[];
  address:string;
  workPhone:number;
  cellPhone:number;
  homePhone:number;
  cellPhone2:number;
  mailAdress:string;

  /* ------------------------Expectations------------------------*/
  goal:string;
  position:string;
  salaryExp:string[];
  general:string;

  constructor(  ) {

    this.country=[];
    this.city=[];
    this.district=[];
    this.address='';
    this.workPhone=0;
    this.cellPhone=0;
    this.cellPhone2=0;
    this.homePhone=0;
    this.mailAdress='';

    /* ------------------------Expectations------------------------*/
    this.goal='';
    this.position='';
    this.salaryExp=[];
    this.general='';


  }
}
