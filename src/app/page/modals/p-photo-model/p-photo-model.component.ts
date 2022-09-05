import { Component, OnInit } from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";


@Component({
  selector: 'app-p-photo-model',
  templateUrl: './p-photo-model.component.html',
  styleUrls: ['./p-photo-model.component.scss']
})
export class PPhotoModelComponent implements OnInit {

  constructor() { }
  imgChangeEvt: any = '';
  cropImgPreview: any = '';

  onFileChange(event: any): void {
    this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
  }
  imgLoad() {
    // display cropper tool
  }
  initCropper() {
    // init cropper
  }

  imgFailed() {
    // error msg
  }
  ngOnInit(): void {
  }

}
