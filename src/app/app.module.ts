import { HttpClientModule, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NumberPickerModule } from 'ng-number-picker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { UsersComponent } from './users/users.component';
import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { BannerComponent } from './components/banner/banner.component';
import { MarkdownModule } from 'ngx-markdown';
import {NgxImageCompressService} from 'ngx-image-compress';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { SubCategoryImageComponent } from './components/sub-category-image/sub-category-image.component';
import {MatSliderModule} from '@angular/material/slider';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgSelectModule } from '@ng-select/ng-select';
 import { WeightComponent } from './weight/weight.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { LightboxModule } from 'ngx-lightbox';
import { Homesection1Component } from './homesection1/homesection1.component';
import { Homesection2Component } from './homesection2/homesection2.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
 import { TestimonialImguploadComponent } from './testimonial-imgupload/testimonial-imgupload.component';
import { ImageuploadcomponentComponent } from './imageuploadcomponent/imageuploadcomponent.component';


import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProductBannerComponent } from './products/product-banner/product-banner.component';
import { CorporatesComponent } from './products/corporates/corporates.component';
import { InstitutionsComponent } from './products/institutions/institutions.component';
import { IndividualComponent } from './products/individual/individual.component';
import { HomebannerComponent } from './home/homebanner/homebanner.component';
import { HomebannerImageComponent } from './home/homebanner-image/homebanner-image.component';
import { OrganizationComponent } from './home/organization/organization.component';
import { OrganizationImageComponent } from './home/organization-image/organization-image.component';
import { SocialMediaComponent } from './home/social-media/social-media.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { AppointmentDetailsComponent } from './home/appointment-details/appointment-details.component';
import { SpecializationDetailsComponent } from './home/specialization-details/specialization-details.component';
import { SpecializationDetailsImageComponent } from './home/specialization-details-image/specialization-details-image.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { GalleryImageComponent } from './home/gallery-image/gallery-image.component';
import { AddressComponent } from './home/address/address.component';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err => this.handleError(err)));
    }


    private handleError(err: HttpErrorResponse): Observable<any> {
        if (err.status === 401 || err.status === 403) {
            this.router.navigateByUrl(`/`);
            return of(err.message);
        }
        return Observable.throw(err);
    }
}
// const appRoutes: Routes = [
//   { path: '**', component: AppComponent },
// ];


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        SidemenuComponent,
        DashboardComponent,
        UsersComponent,
        UnauthorizedComponent,
        PageNotFoundComponent,
        FooterComponent,
        ProgressComponent,
        BannerImageComponent,
        BannerComponent,
        HeaderMenuComponent,
        SubCategoryComponent,
        SubCategoryImageComponent,
        WeightComponent,
       
        Homesection1Component,
        Homesection2Component,
       
        TestimonialComponent,
        TestimonialImguploadComponent,
        ImageuploadcomponentComponent,
        ProductBannerComponent,
        CorporatesComponent,
        InstitutionsComponent,
        IndividualComponent,
        HomebannerComponent,
        HomebannerImageComponent,
        OrganizationComponent,
        OrganizationImageComponent,
        SocialMediaComponent,
        ContactUsComponent,
        AppointmentDetailsComponent,
        SpecializationDetailsComponent,
        SpecializationDetailsImageComponent,
        TestimonyComponent,
        GalleryComponent,
        GalleryImageComponent,
        AddressComponent,


    ],

    imports: [
      MatSlideToggleModule,
      MatInputModule,
      // MatPaginatorModule,
      // MatTableModule,
      // MatPaginator,
      // MatSort,
      MatCardModule,
      MatTabsModule,
      MatGridListModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        NgSelectModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        AutocompleteLibModule,
        BrowserAnimationsModule,
        NgxMaterialTimepickerModule,
        AngularEditorModule,
        ToastrModule.forRoot({
        preventDuplicates: true,
        positionClass: 'toast-top-right',
        timeOut: 3000,
        progressBar : true,
        progressAnimation: 'increasing',
        }),
        AppRoutingModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        TabsModule.forRoot(),
        AngularMultiSelectModule,
        NumberPickerModule,
        NgxLoadingModule.forRoot({
        animationType: ngxLoadingAnimationTypes.rectangleBounce,
            backdropBackgroundColour: '#fff',
            backdropBorderRadius: '25px',
            primaryColour: '#185698',
            secondaryColour: '#185698',
            tertiaryColour: '#185698'
        }),
        ImageCropperModule,
        NgxFileDropModule,
        LazyLoadImageModule,
        DragDropModule,
        MatSliderModule,
        MarkdownModule.forRoot(),
        ColorPickerModule,
        LightboxModule,


    ],
    providers: [
        NgxImageCompressService,{
        provide: HTTP_INTERCEPTORS,
        useFactory: function(router:Router) {
        return new AuthInterceptor(router)
        },
        multi: true,
        deps: [Router]
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
