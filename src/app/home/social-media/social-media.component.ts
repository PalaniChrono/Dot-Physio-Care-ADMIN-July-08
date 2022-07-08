import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/services/image.service';
import Swal from 'sweetalert2';
import { AngularMultiSelect } from 'angular2-multiselect-dropdown';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  productList: any = [];
  loading = false;
  loadingBtn = false;
  showPopup = false;
  stockBox = false;
  modalBoxName = '';
  keyword = 'name';
  categoryName: any = 0;
  productName: any;
  productPrice: any;
  productDiscPrice: any;
  productDesc: any;
  productSize = '';
  productImages: any = [];
  editProductId: any;
  basePrice;
  shortDescription;


  selectedSize: any = [];
  selectedFlavour:any = [];
  sizeSettings = {};
  flavourSettings = {};

  categories: any = [];
  activeCategories: any = [];
  subCategories:any = [];
  subCategoryName:any ;
  filteredSubCategories:any=[];
  sno = 1;
  searchField: FormControl = new FormControl();
  errorMsg: any = [];
  viewBox = false;
  showImage = true;
  imageUrl = '';

  productStocks:any = [];
  stockProductName = '';
  stockForm: FormGroup;

  show: boolean = false;



  // sizeQuantity:any[] = [];

  defaultImage = 'assets/images/loader.gif';

  @ViewChild('auto', { static: false }) auto;
  @ViewChild('auto', { static: false, read: ElementRef }) dishAuto: ElementRef;
  @ViewChild('sizeDropDown', { static: false }) sizeDropDown: AngularMultiSelect;
  @ViewChild('flavourDropDown', { static: false }) flavourDropDown: AngularMultiSelect;

  socialmedia:any;
  header: any;
  content: any;
  email_link:any;
  instagram_link:any;
  facebook_link:any;
  banner_id:any;
  banner_one:any;
  headerLogo: any;
  emailLogo: any;
  instagramLogo: any;
  facebookLogo: any;


  constructor(private apiService: ApiService, private toastr: ToastrService, public router: Router, private imageService: ImageService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getsocialmedia();

  }
  getsocialmedia(){
    this.loading = true;
    this.apiService.getData('getSocialMedia').subscribe((data) => {
        this.socialmedia = data.data[0];
        this.email_link = this.socialmedia.email_link;
        this.instagram_link = this.socialmedia.instagram_link;
        this.facebook_link = this.socialmedia.facebook_link;

        this.headerLogo = this.socialmedia.header_logo;
        this.emailLogo= this.socialmedia.email_logo;
        this.instagramLogo = this.socialmedia.instagram_logo;
        this.facebookLogo = this.socialmedia.facebook_logo;

        this.loading = false;

     }, error => {
        this.loading = false;
    });
  }


apiCall(name, url, value: any = '') {

  this.apiService[name](url, value).subscribe((data) => {
      if (data.error === false) {
          this.toastr.success(data.message);
          this.loadingBtn = false;
      } else {
          this.toastr.error(data.message);
          this.loadingBtn = false;
          this.errorMsg = data.data;
      }
      this.getsocialmedia();
  });
}



updateHeader(){
  const value = {
    email_link: this.email_link,
    instagram_link: this.instagram_link,
    facebook_link: this.facebook_link,
   
  }
 
    this.apiCall("update", "updateSocialMedia", value);

  

}
closepopup(){
  this.show = false;
}
openPopup(){
  this.show = true;
}

}
