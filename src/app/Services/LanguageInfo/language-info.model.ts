export class LanguageInfo{

  language:string[];
  speakingLVL:number;
  readingLVL:number;
  writingLVL:number;
  understandingLVL:number;
  languageExam:string[];
  examResultNumber:number;

  constructor() {
   this.language=[];
   this.speakingLVL=0;
   this.readingLVL=0;
   this.writingLVL=0;
   this.understandingLVL=0;
   this.languageExam=[];
   this.examResultNumber=0;
  }
}
