import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Category } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  AddCategory(data: any) {

    return this.http.post(`/api/category/insert`, data).pipe(map(response => {

      return response;
    }));
  }

  readCategory(locationId: number) {
    return this.http.get(`/api/category/GetAll?locationID=${locationId}`)

  }


  updateCategory(data: any) {
    return this.http.post(`api/category/update`, data)
      .pipe(map(response => {
        return response;
      }));
  }

  deleteCategory(data: any) {
    const CategoryID = { params: { arrayParam: JSON.stringify(data) } };
    // const selectedProducts = this.data.filter(product => product.checked).map(p => p.id);
    return this.http.post(`api/category/delete`, data);
  }


  deleteCategoryByID(data: any) {
    const params = new HttpParams()
      .set('CategoryID', data.categoryID);

    const url = '/api/resource';
    return this.http.post(`api/category/deleteById`, null, { params });
  }
  // deleteItems(ids: number[]): Observable<any> {
  //   const deleteUrl = `${this.apiUrl}/delete`;
  //   return this.http.post<any>(deleteUrl, { ids });
  // }

  getById(id: number) {

    return this.http.get<Category[]>(`api/category/${id}`);
  }

}
