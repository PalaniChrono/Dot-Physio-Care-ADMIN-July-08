import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ApiService } from "src/app/services/api.service";
import { ToastrService } from "ngx-toastr";
import { ImageService } from "src/app/services/image.service";
import Swal from "sweetalert2";
import { AngularMultiSelect } from "angular2-multiselect-dropdown";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.css']
})
export class ProductBannerComponent implements OnInit {
  loading = false;
  loadingBtn = false;
  showPopup = false;

  sno = 1;
  searchField: FormControl = new FormControl();
  errorMsg: any = [];
  viewBox = false;
  showImage = true;

  productStocks: any = [];
  stockProductName = "";
  stockForm: FormGroup;

  defaultImage = "assets/images/loader.gif";

  @ViewChild("auto", { static: false }) auto;
  @ViewChild("auto", { static: false, read: ElementRef }) dishAuto: ElementRef;
  @ViewChild("sizeDropDown", { static: false })
  sizeDropDown: AngularMultiSelect;
  @ViewChild("flavourDropDown", { static: false })
  flavourDropDown: AngularMultiSelect;
  productBannerImage: String;
  productBannerImage1: any;
  productBannerImage2: any;

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    public router: Router,
    private imageService: ImageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getProductContent();
  }
  getProductContent() {
    this.loading = true;
    this.apiService.getData("getProductSection").subscribe(
      (data) => {
        const value = data.data;
        this.productBannerImage1 = value[0].product_banner;
        this.productBannerImage2 = value[0].product_banner_2;
      
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

}
