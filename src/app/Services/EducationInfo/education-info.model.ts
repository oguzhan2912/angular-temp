export class EducationInfo {

  /* ------------------Primary School İnfo----------------*/
  primarySchoolName:string[];
  graduationDatePrimary:Date;
  /* ------------------Secondary School İnfo-------------*/
  secondarySchoolName:string[];
  graduationDateSecondary:Date;

  /* ------------------High School İnfo------------------*/
  highSchoolName:string[];
  graduationDateHigh:Date;
  departmentHigh:string[];
  highGPA:number;

  /* ------------------Degree İnfo------------------*/
  degreeName:string[];
  graduationDateDegree:Date;
  departmentDegree:string[];
  degreeCountry:string[];
  graduationState:string[];
  degreeGPA:number;
  newSchool:string;
  newDepartment:string;

  /* ------------------Associate İnfo------------------*/
  associateName:string[];
  associateDateDegree:Date;
  departmentAssociate:string[];
  associateCountry:string[];
  associateState:string[];
  associateGPA:number;
  newAssociateSchool:string;
  newAssociateDepartment:string;

  /* ------------------Postgraduation İnfo------------------*/
  postGraduateName:string[];
  postgraduationDateDegree:Date;
  departmentPostgradation:string[];
  postgraduationCountry:string[];
  postgraduationState:string[];
  postgraduationGPA:number;
  newPostgraduationSchool:string;
  newPostgraduationDepartment:string;

  /* ------------------PhD İnfo------------------*/
  phdName:string[];
  phdDate:Date=new Date();
  departmentPhD:string[];
  phdCountry:string[];
  phdState:string[];
  phdGPA:number;
  newPhDSchool:string;
  newPhDDepartment:string;

  constructor() {
    /* ------------------Primary School İnfo----------------*/
    this.primarySchoolName=[];
    this.graduationDatePrimary=new Date();

    /* ------------------Secondary School İnfo-------------*/
    this.secondarySchoolName=[];
    this.graduationDateSecondary=new Date();

    /* ------------------High School İnfo------------------*/
    this.highSchoolName=[];
    this.departmentHigh=[];
    this.highGPA=0;
    this.graduationDateHigh=new Date();

    /* ------------------Associate İnfo------------------*/
    this.associateName=[];
    this.associateDateDegree=new Date();
    this.departmentAssociate=[];
    this.associateCountry=[];
    this.associateState=[];
    this.associateGPA=0;
    this.newAssociateSchool='';
    this.newAssociateDepartment='';

    /* ------------------Degree İnfo------------------*/
    this.degreeName=[];
    this.departmentDegree=[];
    this.degreeCountry=[];
    this.graduationState=[];
    this.degreeGPA=0;
    this.newSchool='';
    this.newDepartment='';
    this.graduationDateDegree=new Date();

    /* ------------------Postgraduation İnfo------------------*/
    this.postGraduateName=[];
    this.postgraduationCountry=[];
    this.departmentPostgradation=[];
    this.postgraduationState=[];
    this.postgraduationGPA=0;
    this.newPostgraduationSchool='';
    this.newPostgraduationDepartment='';
    this.postgraduationDateDegree=new Date();

    /* ------------------PhD İnfo------------------*/
    this.phdName=[];
    this.departmentPhD=[];
    this.phdCountry=[];
    this.phdState=[];
    this.phdGPA=0;
    this.newPhDSchool='';
    this.newPhDDepartment='';
    this.phdDate=new Date();
  }


}
