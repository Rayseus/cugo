import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cugo';
  fileContents = [];

  selectedFile(event){
    this.fileContents = [];
    let file = event.target.files[0];
    if(file.size){
      let reader = new FileReader();
      console.log("ok");
      reader.onload = (event:any) => {
        let content = event.target.result;
        console.log("src: ", content);
        
        content.split("\n").forEach(element => {
          this.fileContents.push(element);
        });
        
        console.log("data: ",this.fileContents);
      }
      reader.readAsText(file); 
    }
  }
  

  // function(scope, element){
  //   $(element).on('change', function(event){
  //     let file = event.target.files;
  //     if(file.length){
  //       let reader = new FileReader();
  //       reader.onload = (e:any) => {
  //         let contents = e.target.result;
  //         scope.$apply(function(){
  //           scope.FileReader = contents;
  //           scope.testing = contents;
  //         });
  //       };
  //       reader.readAsText(file[0]);
  //     }
  //   });
  // }
  
}
