import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product/products/product.component';
import { AddProductComponent } from './product/addproducts/addproduct.component';
import { CategoryComponent } from './category/category/category.component';
import { AddCategoryComponent } from './category/addcategory/addcategory.component';
import { PackageComponent } from './package/packages/package.component';
import { AddPackageComponent } from './package/add-package/addpackage.component';
import { GraphComponent } from './_directives/graph/graph.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './Layout/Components/footer/footer.component';
import { HeaderComponent } from './Layout/Components/header/header.component';
import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ImageUploadComponent } from './_directives/image-upload/image-upload.component';
import { TotalSalesComponent } from './admin/dashboard/total-sales/total-sales.component';
import { TotalOrdersComponent } from './admin/dashboard/total-orders/total-orders.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './_directives/loader/loader.component';
import { LoadingInterceptor } from './service/loading.interceptor';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    DashboardComponent,
    ProductComponent,
    AddProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    PackageComponent,
    AddPackageComponent,
    LoginComponent,
    BaseLayoutComponent,  
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ImageUploadComponent,
    GraphComponent,
    TotalSalesComponent,
    TotalOrdersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgApexchartsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      {
        path: 'admin', component: BaseLayoutComponent,
        // path: 'Layout', component: BaseLayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'products', component: ProductComponent },
          { path: 'products/add-product', component: AddProductComponent },
          { path: 'products/category/add-category', component: AddCategoryComponent},
          { path: 'products/category', component: CategoryComponent},
          { path: 'products/category/edit/:id', component: AddCategoryComponent },
          { path: 'products/package/add-package', component: AddPackageComponent},
          { path: 'products/package', component: PackageComponent},
        ]
      }
    ]),
  ],
  providers: [
    AuthService,{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
