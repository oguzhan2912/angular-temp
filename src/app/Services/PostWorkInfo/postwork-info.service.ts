import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PostworkInfo} from "./postwork-info.model";


@Injectable({
  providedIn: 'root'
})
export class PostworkInfoService {

  postWorkModel: Array<PostworkInfo>=[];
  apiUrl=environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(model: PostworkInfo){
    let api= this.apiUrl+ "PostWorks/SavePostWorks";
    return this.http.post<any>(api,model);
  }
  update(model: PostworkInfo){
    let api = this.apiUrl + "PostWorks/UpdatePostWorks";
    return this.http.post<any>(api,model);
  }
  delete(model: PostworkInfo){
    let api = this.apiUrl + "PostWorks/DeletePostWorks";
    return this.http.post<any>(api,model.id);
  }
  getList(){
    let api = this.apiUrl + "PostWorks/GetPostWorks";
    return this.http.get<any>(api);
  }
}
