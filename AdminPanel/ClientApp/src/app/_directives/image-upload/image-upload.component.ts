import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {


  selectedFiles?: FileList | null = null;
  FilesSeleced?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  imageUrl: any = "https://marnpossastorage.blob.core.windows.net/marnpos-v2-images/default-product.PNG";
  previews: string[] = [];
  imageInfos?: Observable<any>;
  
  constructor(public fb: FormBuilder,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  selectFiles(event: any){
    debugger;
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;


    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {

         let file = event.target.files[0];
        const reader = new FileReader();
         reader.readAsDataURL(file);
        reader.onload = (e: any) => {
          this.imageUrl = reader.result;
          this.previews.push(e.target.result);
          this.registrationForm.patchValue({
            file: reader.result
          });
        };
          this.cd.markForCheck();
        
        console.log(this.registrationForm);
        console.log(file);

        //reader.readAsDataURL(this.selectedFiles[i]);
        // this.imageUrl = reader.result;
        // console.log(reader.result);
      }
    }
  }

  deleteImage(): void{
    if (this.previews) {
      this.previews = [];
      this.selectedFiles = !this.selectedFiles ? this.FilesSeleced : null;
      }      
    }
  registrationForm = this.fb.group({
    file: [null]
  })
}
