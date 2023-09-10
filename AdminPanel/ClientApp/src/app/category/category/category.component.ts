import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../service/localstorage.service';
import { LocationsService } from '../../service/locations.service';
import { CategoryService } from '../../service/category.service';
// import { ToastService } from 'src/app/service/toast.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})

// interface category {
// 	name: string;
// 	alternateName: string;
// 	description: string;
// 	statusID: number;
// 	displayOrder: number;
// }
export class CategoryComponent {

  public categories: Array<any> = [];

  private location: any = null;
  categoryItem: any[] = [];
  public showButton: boolean = false;
  public showSearch: boolean = false;
  isAllSelected = false;
  currentPage = 1;
  itemsPerPage = 4; // Number of items per page
  totalItems = this.categoryItem.length;
  currentSortKey: string = '';
  isAscending: boolean = true;
  searchText: string = '';
  totalPages: number = Math.ceil(this.totalItems / this.itemsPerPage);
  allSelected = false;
  anyRowChecked = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationsService,
    private ls: LocalStorageService,
    private categoryService: CategoryService)
  // private ts: ToastService)
  { }

  toggleAll(): void {
    this.allSelected = !this.allSelected;
    for (const item of this.categoryItem) {
      item.checked = this.allSelected;
    }
    this.anyRowChecked = this.categoryItem.some(category => category.checked);
  }

  onCheckboxChange(): void {
    this.anyRowChecked = this.categoryItem.some(category => category.checked);
    this.allSelected = this.categoryItem.every(category => category.checked);
  }

  get itemsOnCurrentPage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.categoryItem.slice(startIndex, startIndex + this.itemsPerPage);

  }

  calculateTotalPages(totalItems: number, itemsPerPage: number): number {
    return Math.ceil(totalItems / itemsPerPage);
  }


  sort(key: string) {
    if (this.currentSortKey === key) {
      this.isAscending = !this.isAscending;
    }
    else {
      this.currentSortKey = key;
      this.isAscending = true;
    }

    this.categoryItem = this.categoryItem.slice().sort((a, b) => {
      const comparison = a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
      return this.isAscending ? comparison : -comparison;
    });
  }

  filterItems(): void {
    // Implement your filtering logic here
    if (this.searchText.trim() === '') {
      this.categoryItem = this.categories.slice(); // Show all items when search text is empty
    } else {
      this.categoryItem = this.categories.filter(category =>
        category.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }


  Edit(category: any) {
    debugger;
    this.router.navigate(["admin/products/category/edit", category]);

  }

  deleteProducts(): void {
    const selectedProducts = this.categoryItem.filter(item => item.checked).map(p => p.id);

    if (selectedProducts && selectedProducts.length > 0) {
      this.categoryService.deleteCategory(selectedProducts as number[])
        .subscribe(res => {

        }, err => {

        }
        );
    } else {
    }
  }

  Delete(obj: any) {

    this.categoryService.deleteCategoryByID(obj).subscribe((response: any) => {
      if (response != 0) {
        this.dataCategory();

      }
      else {
      }
    }, error => {
    });
  }

  ngOnInit() {
    this.location = this.ls.getSelectedLocation();
    if (this.location)
      this.dataCategory();
      console.log(this.categoryItem);

  }
  dataCategory() {
    this.categoryService.readCategory(this.location.locationID)
      .subscribe((response: any) => {
        if (response != null) {
          this.categoryItem = response;
          this.categories = response;
          this.anyRowChecked = false;
          this.totalItems = this.categoryItem.length;
          this.totalPages = this.calculateTotalPages(this.totalItems, this.itemsPerPage);
          console.log(this.categoryItem);
        }
        else {
          // this.ts.showWarning("Warning", "No data to display!");
        }
        //  this.totalPages = Math.ceil(this.categories.length / this.itemsPerPage);
        // this.updateDisplayedItems();
      })
  }
  checkAllCheckBox() {
    if (!this.isAllSelected) {
      alert(this.showButton)
      this.showButton = !this.showButton;
    }
    var a = this.categoryItem.every(category => category.checked)
    // this.categories.forEach(x => x.checked = ev.target.checked)

    //  this.showButton = !this.showButton;

  }

  selectAll(event: any) {
    this.isAllSelected = !this.isAllSelected;
    const isChecked = event.target.checked;
    this.showButton = !this.showButton;
    this.categoryItem.forEach(category => (category.checked = isChecked));
    // this.checkAllCheckBox(); // Check if all items are selected

    // this.showButton = !this.showButton;
  }

  // isAllCheckBoxChecked() {
  //   this.showButton = !this.showButton;
  // 	return this.categories.every(p => p.checked);    

  // }

  deleteSelected() {
    const selectedIds = this.categoryItem.filter(category => category.checked).map(category => category.categoryID);
    if (selectedIds.length === 0) {
      return; // No items selected
    }

    this.categoryService.deleteCategory(selectedIds).subscribe(() => {
      // Successfully deleted items
      this.dataCategory(); // Refresh the data
      this.isAllSelected = false;
      // this.ts.showSuccess("Success", "Data deleted successfully!");
    });
  }

  showBar() {
    this.showSearch = !this.showSearch;
  }
}
