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
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {

  productList: any = [];
  loading = false;
  loadingBtn = false;
  showPopup = false;

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

  productDetails:any;
  header: any;
  content: any;


  constructor(private apiService: ApiService, private toastr: ToastrService, public router: Router, private imageService: ImageService, private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.getProductSection();


  }


  getProductSection(){
    this.loading = true;
    this.apiService.getData('getProductSection').subscribe((data) => {
      this.productDetails = data.data[0];
      this.header = this.productDetails.two_header;
      this.content = this.productDetails.two_content;
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
      this.getProductSection();
  });
}



updateHeader(){
  const value = {
    type: "individuals",
    two_header: this.header,
    two_content: this.content
   
  }
  if(this.home_card2_textcontent.length>340){
    this.openPopup();
  }
  else{
    this.apiCall("update", "updateProductSection", value);

  }

}
closepopup(){
  this.show = false;
}
openPopup(){
  this.show = true;
}

}
