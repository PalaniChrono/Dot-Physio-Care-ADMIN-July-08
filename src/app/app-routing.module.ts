import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { UsersComponent } from './users/users.component';
import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { SubCategoryImageComponent } from './components/sub-category-image/sub-category-image.component';


import { WeightComponent } from './weight/weight.component';
import { Homesection1Component } from './homesection1/homesection1.component';
import { Homesection2Component } from './homesection2/homesection2.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
 import { TestimonialImguploadComponent } from './testimonial-imgupload/testimonial-imgupload.component';
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







const routes: Routes = [
   
    {path: 'sub-categories', component: SubCategoryComponent},
    {path: 'sub-category-image/:id', component: SubCategoryImageComponent},
   
    {path: 'banner', component: BannerComponent},
    {path: 'banner-image/:id', component: BannerImageComponent},

    {path: 'header-menu', component: HeaderMenuComponent},
    {path: '', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
   
    {path:'HomeSectionOne',component:Homesection1Component},
    {path:'HomesectionTwo',component:Homesection2Component},
    
     {path:'testimonial-detail/:id',component:TestimonialComponent},
      {path:'testimonialimageupload/:menu/:id',component:TestimonialImguploadComponent},


   //Header
   {path: 'header-media', component: SocialMediaComponent},   
  //Home Banner
     {path: 'home-banner', component: HomebannerComponent},
     {path: 'home-banner-image/:id', component: HomebannerImageComponent},
  //Appointment
     {path: 'appointment-details', component: AppointmentDetailsComponent},
  //specialization
     {path: 'specialization-details', component: SpecializationDetailsComponent},
     {path: 'specialization-details-image/:id', component: SpecializationDetailsImageComponent},
  // treatment
     {path: 'treatment', component: OrganizationComponent},
     {path: 'treatment-image/:id', component: OrganizationImageComponent},
  // testimony
      {path: 'testimony', component: TestimonyComponent},
  // testimony
    {path: 'gallery', component: GalleryComponent},
    {path: 'gallery-image/:id', component: GalleryImageComponent},

    {path: 'contact-us', component: ContactUsComponent},
    {path: 'address', component: AddressComponent},

    {path:'testimonial-detail/:id',component:TestimonialComponent},
    {path:'testimonialimageupload/:menu/:id',component:TestimonialImguploadComponent},
    {path:'product-banner',component:ProductBannerComponent},
    {path:'product-corporate',component:CorporatesComponent},
    {path:'product-institution',component:InstitutionsComponent},
    {path:'product-individuals',component:IndividualComponent},



    // {path: 'users', component: UsersComponent, data: {role: 'user'}, canActivate: [AuthGuard]},
    {path: 'users', component: UsersComponent},
    {path: 'unauth', component: UnauthorizedComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true }),],
    exports: [RouterModule]
})
export class AppRoutingModule { }
