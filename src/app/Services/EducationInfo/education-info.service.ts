import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ContactInfo} from "../ContactInfo/contact-info.model";
import {DegreeInfo, EducationInfo, PostDegreeInfo} from "./education-info.model";

@Injectable({
  providedIn: 'root'
})
export class EducationInfoService {

  formDataEdu: EducationInfo= new EducationInfo();
  formDataDegree: DegreeInfo=new DegreeInfo();
  formDataPoDegree: PostDegreeInfo = new PostDegreeInfo();

  educationModel: Array<EducationInfo>=[];
  degreeModel:Array<DegreeInfo>=[];
  postDegreeModel: Array<PostDegreeInfo>=[];

  constructor(private http: HttpClient) { }

  getEducationList(){
    return this.http.get(environment.apiUrl + "Educations/GetEducation").toPromise();
  }

  getDegreeList(){
    return this.http.get(environment.apiUrl + "EducationDegrees/GetEducationDegrees").toPromise();
  }

  getPostDegreeList(){
    return this.http.get(environment.apiUrl + "EducationPostDegrees/GetEducationPostDegrees").toPromise();
  }

  saveEducation(educationModel:EducationInfo){
    this.formDataEdu.id =educationModel.id;
                     /******PHD******/
    this.formDataEdu.phdName=educationModel.phdName;
    this.formDataEdu.phdGPA=educationModel.phdGPA;
    this.formDataEdu.phdCountry=educationModel.phdCountry;
    this.formDataEdu.phdDate=educationModel.phdDate;
    this.formDataEdu.phdState=educationModel.phdState;
    this.formDataEdu.departmentPhD=educationModel.departmentPhD;
    this.formDataEdu.newPhDSchool=educationModel.newPhDSchool;
    this.formDataEdu.newPhDDepartment=educationModel.newPhDDepartment;
                    /******Primary******/
    this.formDataEdu.primarySchoolName=educationModel.primarySchoolName;
    this.formDataEdu.graduationDatePrimary=educationModel.graduationDatePrimary;
                    /******Secondary******/
    this.formDataEdu.secondarySchoolName=educationModel.secondarySchoolName;
    this.formDataEdu.graduationDateSecondary=educationModel.graduationDateSecondary;
                    /******High******/
    this.formDataEdu.highSchoolName=educationModel.highSchoolName;
    this.formDataEdu.graduationDateHigh=educationModel.graduationDateHigh;
                    /******Associate******/
    this.formDataEdu.associateName=educationModel.associateName;
    this.formDataEdu.associateGPA=educationModel.associateGPA;
    this.formDataEdu.associateState=educationModel.associateState;
    this.formDataEdu.associateCountry=educationModel.associateState;
    this.formDataEdu.associateDateDegree=educationModel.associateDateDegree;
    this.formDataEdu.departmentAssociate=educationModel.departmentAssociate;
    this.formDataEdu.newAssociateSchool=educationModel.newAssociateSchool;
    this.formDataEdu.newAssociateDepartment=educationModel.newAssociateDepartment;

    var body={
      educationDto:this.formDataEdu,
    }
    return this.http.post(environment.apiUrl + "Educations/GetEducations",body);
  }

  saveDegree(degreeModel:DegreeInfo){
    this.formDataDegree.degreeCountry=degreeModel.degreeCountry;
    this.formDataDegree.degreeGPA=degreeModel.degreeGPA;
    this.formDataDegree.degreeName=degreeModel.degreeName;
    this.formDataDegree.departmentDegree=degreeModel.departmentDegree;
    this.formDataDegree.graduationDateDegree=degreeModel.graduationDateDegree;
    this.formDataDegree.graduationState=degreeModel.graduationState;
    this.formDataDegree.id=degreeModel.id;
    this.formDataDegree.newDegreeDepartment=degreeModel.newDegreeDepartment;
    this.formDataDegree.newDegreeSchool=degreeModel.newDegreeSchool;

    var body={
      degreeDto:this.formDataDegree,
    }
    return this.http.post(environment.apiUrl + "EducationDegrees/GetEducationDegrees",body);
  }

  savePostDegree(postDegreeModel:PostDegreeInfo){
    this.formDataPoDegree.id=postDegreeModel.id;
    this.formDataPoDegree.postgraduationDateDegree=postDegreeModel.postgraduationDateDegree;
    this.formDataPoDegree.departmentPostgraduation=postDegreeModel.departmentPostgraduation;
    this.formDataPoDegree.postgraduationCountry=postDegreeModel.postgraduationCountry;
    this.formDataPoDegree.newPostgraduationSchool=postDegreeModel.newPostgraduationSchool;
    this.formDataPoDegree.newPostgraduationDepartment=postDegreeModel.newPostgraduationDepartment;
    this.formDataPoDegree.postgraduationGPA=postDegreeModel.postgraduationGPA;
    this.formDataPoDegree.postgraduationName=postDegreeModel.postgraduationName;
    this.formDataPoDegree.postgraduationState=postDegreeModel.postgraduationState;

    var body={
      postdegreeDto:this.formDataPoDegree,
    }
    return this.http.post(environment.apiUrl + "EducationPostDegrees/GetEducationPostDegrees",body);
  }
}
