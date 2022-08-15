export class PostworkInfo {
  company:string;
  companyDepartment:string;
  companyPosition:string;
  companyMission:string;
  lastSalary:number;
  companyStartingDate:Date;
  stillWorking:boolean;
  companyLeavingDate:Date;
  companyLeavingReason:string;

  constructor() {
    this.company='';
    this.companyDepartment='';
    this.companyPosition='';
    this.companyMission='';
    this.lastSalary=0;
    this.companyStartingDate=new Date();
    this.stillWorking=true;
    this.companyLeavingReason='';
    this.companyLeavingDate=new Date();
  }
}
