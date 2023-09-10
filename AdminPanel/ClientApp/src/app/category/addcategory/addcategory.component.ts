import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { LocalStorageService } from 'src/app/service/localstorage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Observable } from 'rxjs';
import { ImageUploadComponent } from '../../_directives/image-upload/image-upload.component';


@Component({
  selector: 'app-category',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddCategoryComponent implements OnInit {
  submitted = false;
  addCategory: any = FormGroup;
  today = new Date();
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  selectedStatus: string = '';
  previews: string[] = [];
  imageInfos?: Observable<any>;
  @ViewChild(ImageUploadComponent, { static: true }) imgComp: any;

  constructor(private formBuilder: FormBuilder, private ls: LocalStorageService, private router: Router,
    private route: ActivatedRoute, private categoryService: CategoryService) { this.createForm(); }

  private createForm() {
    
    this.addCategory = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      rowID: 0,
      alternateName: new FormControl(''),
      description: new FormControl(''),
      statusID: new FormControl(''),
      displayOrder: new FormControl(''),
      categoryID: 0,
      image: new FormControl(''),
      locationID: this.ls.getSelectedLocation().locationID,
      LastUpdatedBy: this.ls.getSelectedUser().userName
    });
  }

  private editForm(obj: any) {
    console.log(obj);
    this.f.name.setValue(obj.name);
    this.f.alternateName.setValue(obj.alternateName);
    this.f.displayOrder.setValue(obj.displayOrder);
    this.f.categoryID.setValue(obj.categoryID);
    this.f.image.setValue(obj.image);
    this.f.description.setValue(obj.description);
    this.f.statusID.setValue(obj.statusID === 1 ? 1 : 2);
    this.f.locationID.setValue(this.ls.getSelectedLocation().locationID);
    this.f.LastUpdatedBy.setValue(this.ls.getSelectedUser().userName);
    this.f.rowID.setValue(obj.rowID);
    
  }

  deleteImage(): void{
    if (this.f.image.value) {
      this.f.image.value = "";
      // this.selectedFiles = !this.selectedFiles ? this.FilesSeleced : null;
      console.log(this.imgComp);
      }      
    }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }

  setSelectedCategory() {
    this.route.paramMap.subscribe((param: any) => {
      const scid = +param.get('id');
      if (scid) {
        //this.loadingCategory = true;
        this.f.categoryID.setValue(scid);
        this.categoryService.getById(scid).subscribe((response: any) => {
          //   //Set Forms
          this.editForm(response);
          //   //this.loadingCategory = false;
        });
      }
    })
  }

  onSubmit() {
    debugger;
    this.addCategory.markAllAsTouched();
    this.submitted = true;
    if (this.addCategory.invalid) { return; }
    // this.f.statusID.setValue(this.f.statusID.value === "Active" ? 1 : 2);
    this.f.image.setValue(this.imgComp.imageUrl);
    
    if (parseInt(this.f.categoryID.value) === 0) {
      delete this.f.categoryID;
      this.categoryService.AddCategory(this.addCategory.value).subscribe(data => {
        if (data != 0) {

          this.router.navigate(['/admin/products/category']);
        }

      }, error => {
      });
    }
    else {
      this.categoryService.updateCategory(this.addCategory.value).subscribe((data: any) => {
        //this.loading = false;
        if (data != 0) {
          //this.ts.showSuccess("Success","Record updated successfully.")
          this.router.navigate(['/admin/products/category']);
        }
      },
        error => {
          // this.ts.showError("Error","Failed to update record.")
          //this.loading = false;
        });
    }
  }

  ngOnInit() {
    this.setSelectedCategory();
    this.ls.getSelectedLocation().id;
    console.log(this.editForm);
  }

  get f() {
    
     return this.addCategory.controls; }
  
}
