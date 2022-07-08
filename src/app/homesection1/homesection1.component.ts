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
  selector: "app-homesection1",
  templateUrl: "./homesection1.component.html",
  styleUrls: ["./homesection1.component.css"],
})
export class Homesection1Component implements OnInit {
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
  homeBannerImage: String;
  homeBannerImagetwo:String;
  homeBannerImagethree:String;
  homeBannerImagefour:String;


  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    public router: Router,
    private imageService: ImageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getHomeBanner();
  }
  getHomeBanner() {
    this.loading = true;
    this.apiService.getData("getHomeSection").subscribe(
      (data) => {
        const value = data.data;
        this.homeBannerImage = value[0].banner_one;
        this.homeBannerImagetwo = value[0].banner_two;
        this.homeBannerImagethree = value[0].banner_three;
        this.homeBannerImagefour = value[0].banner_four;
      
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

}
