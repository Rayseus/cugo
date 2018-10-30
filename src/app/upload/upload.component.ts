import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:3000/';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styles: []
})
export class UploadComponent implements OnInit {

  constructor() { }

  title = 'feature';

  public uploader: FileUploader = new FileUploader({url: URL, method: "POST", itemAlias: 'feature'});
  
  // public selectedFile(event){
  //   let reader = new FileReader();
  //   reader.onload = (event:any) => {
  //     let src = event.target.result;
  //     console.log("src: ", src);
  //   }

  ngOnInit() {
    
    
    this.uploader.onAfterAddingFile = (file) =>
      {
        file.withCredentials = false;
        //reader.readAsText(selectFile)
        console.log("ng2: ", file);
        //reader.readAsText(file);
      };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) =>
      {
        console.log('FeatureUpload: ', item, status, response, headers);
        
      };
  }      


}
