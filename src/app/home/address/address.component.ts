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
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

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


  card2_img : any = ""
  card2_iconimg : any = ""
  home_card2_heading : any = ""
  home_card2_textcontent : any = ""
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
  address:any;
  quotes:any;
  facebook_link:any;
  banner_id:any;
  banner_one:any;
  headerLogo: any;


  constructor(private apiService: ApiService, private toastr: ToastrService, public router: Router, private imageService: ImageService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getHeaderlogo();

    this.getsocialmedia();


  }
  getHeaderlogo() {
    this.loading = true;
    this.apiService.getData("getSocialMedia").subscribe(
      (data) => {
        const value = data.data;
        this.banner_id = value[0].id;
        this.headerLogo = value[0].header_logo;
      
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }


  getsocialmedia(){
    this.loading = true;
    this.apiService.getData('getAllAddress').subscribe((data) => {
        this.socialmedia = data.data[0];
        this.address = this.socialmedia.address;
        this.quotes = this.socialmedia.quotes;

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
    address: this.address,
    quotes: this.quotes,
   
  }
 
    this.apiCall("update", "updateAlldetails", value);

  

}
closepopup(){
  this.show = false;
}
openPopup(){
  this.show = true;
}

}

