export class OtherInfo {

  interests:string;
  memberNGO:string;
  travelContinents:boolean;
  cigarette:boolean;
  militaryStatus:string[];
  defermentDate:Date;
  completionDate:Date;


  constructor() {
    this.interests='';
    this.memberNGO='';
    this.travelContinents=true;
    this.cigarette=true;
    this.militaryStatus=[];
    this.defermentDate=new Date();
    this.completionDate=new Date();
  }

}
