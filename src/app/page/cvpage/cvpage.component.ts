import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DegreeModalComponent} from "../modals/degree-modal/degree-modal.component";
import {LanguaeModalComponent} from "../modals/languae-modal/languae-modal.component";
import {WorkmodalComponent} from "../modals/workmodal/workmodal.component";
import {ReferanceModalComponent} from "../modals/referance-modal/referance-modal.component";
import {SkillmodalComponent} from "../modals/skillmodal/skillmodal.component";

@Component({
  selector: 'app-cvpage',
  templateUrl: './cvpage.component.html',
  styleUrls: ['./cvpage.component.scss']
})
export class CvpageComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) { }
  public isCollapsed = false;

  selected: Date | null | undefined;

  /* ------------------------General İnfo------------------------*/
  public name: string | undefined;
  public surname: string | undefined;
  public genders: string[]=['Erkek','Kadın'];
  public graduation:string[]=
    ['İlkokul',
      'Ortaokul',
      'Lise',
      'Ön Lisans',
      'Meslek Yüksekokulu',
      'Lisans',
      'Yüksek lisans',
      'Doktora'];
  public identitytype: string[]=['TC.Kimlik No.','Geçici Kimlik No.','Passaport No.'];
  public  identitynum: number | undefined;
  public  martialStatus:string[]=['Evli','Bekar'];
  public  driverLicense:string[]=['Evet','Hayır'];
  public  driverLicenseType:string[]=['A1','A2','B1','B2','C','D'];
  public  nation:string[]=['Alamanya','pırasa','Türkiye'];


  /* ------------------------Personal İnfo------------------------*/

  public   dateofBirth:any;
  public   bornedCountry:string[]=['Almanya','Türkiye'];
  public  bornedCity:string[]=['Berlin','Çankırı'];



  /* ------------------------Expectations------------------------*/

  public goal: string | undefined;
  public position: string | undefined;
  public salaryExp:string[]=['4.000-6.000','6.000-8.000','8.000-10.000'];
  public general: string | undefined;


  /* ------------------------Education İnfo------------------------*/
  /* ------------------Primary School İnfo----------------*/
  public primarySchoolName:string| undefined;
  public  graduationDatePrimary:any;
  /* ------------------Seoondary School İnfo-------------*/
  public secondarySchoolName:string| undefined;
  public graduationDateSecondary:any;
  /* ------------------High School İnfo------------------*/
  public highSchoolName:string| undefined;
  public graduationDateHigh:any;
  public departmentHigh:string[]=['Sayısal','Sözel'];
  public highGPA:number| undefined;
  /* ------------------Degree İnfo------------------*/
  public degreeType:string[]=['Önlisans','Lisans','Meslek Yüksekokulu'];
  public degreeName:string[]=['Sakarya Univ.','Anadolu Univ.','Marmara Univ.'];
  public  graduationDateDegree:any;
  public departmentDegree:string[]=['Bilgisayar Mühendisliği','Yazılım Mühendisliği','Matematik Mühendisliği'];
  public  degreeCountry:string| undefined;
  public degreeGPA:number| undefined;
  public newSchool:string| undefined;
  public  newDepartment:string| undefined;
  public  graduationState:string[]=['Mezun','Devam Ediyor','Terk'];
  public notDegree:string[]=['Evet','Hayır'];
  /* ------------------Postgraduation İnfo------------------*/
  public postgraduateName:string[]=['Sakarya Univ.','Anadolu Univ.','Marmara Univ.'];
  public  postgraduationDateDegree:any;
  public   departmentPostgradation:string[]=['Bilgisayar Mühendisliği','Yazılım Mühendisliği','Matematik Mühendisliği'];
  public  postgraduationCountry:string| undefined;
  public  postgraduationGPA:number| undefined;
  public   newPostgraduationSchool:string| undefined;
  public   newostgraduationDepartment:string| undefined;
  public  postgraduationState:string[]=['Mezun','Devam Ediyor','Terk'];
  /* ------------------PhD İnfo------------------*/
  public   phdName:string[]=['Sakarya Univ.','Anadolu Univ.','Marmara Univ.'];
  public   phdDate:any;
  public  departmentPhD:string[]=['Bilgisayar Mühendisliği','Yazılım Mühendisliği','Matematik Mühendisliği'];
  public   phdCountry:string| undefined;
  public   phdGPA:number| undefined;
  public  newPhDSchool:string| undefined;
  public  newPhDDepartment:string| undefined;
  public   phdState:string[]=['Mezun','Devam Ediyor','Terk'];


  /* ------------------------Language İnfo------------------------*/

  public  language:string[]=['İngilizce','Almanca','Fransızca','Arapça'];
  public   speakingLvl:string[]=['Başlangıç','Orta','İyi','Ana dil seviyesi'];
  public   readingLvl:string[]=['Başlangıç','Orta','İyi','Ana dil seviyesi'];
  public   writing:string[]=['Başlangıç','Orta','İyi','Ana dil seviyesi'];
  public  languageExam:string[]=['Toefl','YDS','YÖK-DİL'];
  public  examResult:number| undefined;


  /* ------------------------Post Work İnfo------------------------*/
  public  company:string| undefined;
  public  companyDepartment:string| undefined;
  public  companyPosition:string| undefined;
  public   companyMission:string| undefined;
  public   lastSalary:number| undefined;
  public   companyStartingDate:any;
  public  stillWorking:string[]=['Evet','Hayır'];
  public  companyLeavingDate:any;
  public  companyLeavingReason:string| undefined;

  /* ------------------------Skill İnfo------------------------*/
  public   skillComp:string[]=['Excel','Word','Powerpoint'];


  /* ------------------------Contact İnfo------------------------*/

  public   country:string[]=['Alamanya','Türkiye'];
  public   city:string[]=['Berlin','Ordu'];
  public   district:string[]=['Ulubey','Perşembe'];
  public   address:string | undefined;
  public   workPhone: number | undefined;
  public   cellPhone:number | undefined;
  public   homePhone:number| undefined;
  public   cellPhone2:number| undefined;
  public   mailAdress:string| undefined;

  /*---------------------------Dosya İnfo--------------------------*/

  public fileType:string[]=['Özgeçmiş','Sertifika'];
  public continent:string[]=['Evet','Hayır'];



/*---------------------------Stepper --------------------*/
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  eightFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  ninthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  isLinear = false;
  panelOpenState = false;

  openLanguageModal() {
    this.dialog.open(LanguaeModalComponent);
  }
  openWorkModal(){
    this.dialog.open(WorkmodalComponent);
  }
  openReferanceModal(){
    this.dialog.open(ReferanceModalComponent);
  }
  openSkillModal(){
    this.dialog.open(SkillmodalComponent);
  }

  ngOnInit(): void {
  }

}
