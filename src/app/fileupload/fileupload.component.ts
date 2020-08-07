import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  fileurl
  PdfSource:any='';
  pdfData:any={};
  pdfChangedEvent: File;
  constructor() { }

  ngOnInit(): void {
    this.pdfData.PdfBytes='';
  }

  pdfupload(event){
    /* if(event.target.files){
      var reader= new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) =>{
        this.url=event.target.result
      }
    } */

    if(event.target.files[0].type === "application/pdf" ){
      if(event.target.files[0].size < 2500000){
         if(event.target.files[0].type === "application/pdf"){
          this.pdfChangedEvent = event.target.files[0];
          const reader = new FileReader();
          reader.onload = () => {
          this.PdfSource = reader.result;
          this.pdfData.PdfBytes=this.PdfSource;
          this.fileurl='';
      if(this.PdfSource !=''){
        this.fileurl='';
        const targetElement = document.querySelector('#_pdffile');
        const iframe = document.createElement('iframe');
        iframe.width = '100%'
        iframe.height = '100%'
        iframe.src = this.PdfSource;
        targetElement.appendChild(iframe);
        this.fileurl=event.target.files[0].name;
       
      }
    };
    reader.readAsDataURL(this.pdfChangedEvent);
        }
      }else{
        alert("File Size Should be less than 2.5MB");
      }
     
    }else{
      alert("Only PDF Format Allowed");
    }
  }
}
