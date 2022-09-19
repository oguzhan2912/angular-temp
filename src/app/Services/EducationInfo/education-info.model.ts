export class EducationInfo {
  id:number;
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

  /* ------------------Associate İnfo------------------*/
  associateName:string[];
  associateDateDegree:Date;
  departmentAssociate:string[];
  associateCountry:string[];
  associateState:string[];
  associateGPA:number;
  newAssociateSchool:string;
  newAssociateDepartment:string;

  /* ------------------PhD İnfo------------------*/
  phdName:string[];
  phdDate:Date=new Date();
  departmentPhD:string[];
  phdCountry:string[];
  phdState:string[];
  phdGPA:number;
  newPhDSchool:string;
  newPhDDepartment:string;
  constructor() { }
}

export class DegreeInfo{

  /* ------------------Degree İnfo------------------*/
  id:number;
  degreeName:string[];
  graduationDateDegree:Date;
  departmentDegree:string[];
  degreeCountry:string[];
  graduationState:string[];
  degreeGPA:number;
  newDegreeSchool:string;
  newDegreeDepartment:string;

  constructor() { }
}

export class PostDegreeInfo{

  /**********Postgraduation İnfo*************/
  id:number;
  postgraduationName:string[];
  postgraduationDateDegree:Date;
  departmentPostgraduation:string[];
  postgraduationCountry:string[];
  postgraduationState:string[];
  postgraduationGPA:number;
  newPostgraduationSchool:string;
  newPostgraduationDepartment:string;

  constructor() {
  }
}
