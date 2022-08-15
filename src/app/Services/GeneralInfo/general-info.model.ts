export class GeneralInfo {
  /* ------------------------General İnfo------------------------*/
  Name:string;
  Lastname:string;
  graduation:string[];
  gender:string[];
  identityType:string[];
  identityNum:number;
  driverLicense:boolean;
  martialStatus:string[];
  driverLicenseType:string[];
  nation:string[];

  /* ------------------------Personal İnfo------------------------*/
  dateOfBirth:Date;
  bornedCountry:string[];
  bornedCity:string[];

  constructor( ) {
    /* ------------------------General İnfo------------------------*/
    this.Name='';
    this.Lastname='';
    this.gender=[];
    this.graduation=[];
    this.dateOfBirth=new Date();
    this.identityType=[];
    this.identityNum=0;
    this.driverLicense=true;
    this.driverLicenseType=[];
    this.martialStatus=[];
    this.nation=[];

    /* ------------------------Personal İnfo------------------------*/

    this.bornedCity=[];
    this.bornedCountry=[];

  }
}
