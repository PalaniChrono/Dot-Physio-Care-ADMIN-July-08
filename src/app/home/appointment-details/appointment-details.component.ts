import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ImageService } from 'src/app/services/image.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {


  searchField: FormControl = new FormControl();
  errorMsg: any = [];
  sno = 1;
  showPopup = false;
  loading = false;
  bannerList: any = [];
  bannerName = '';
  description :any;
  editBannerId = '';
  modalBoxName;
  loadingBtn = false;
  viewBox = false;
  viewImagePreview = '';
  viewNamePreview = '';
  showImage = true;
  imageUrl = '';
  viewImageDisc = '';
  defaultImage = 'assets/images/loader.gif';

  constructor(private apiService: ApiService, private toastr: ToastrService, private imageService: ImageService) { }

  ngOnInit() {
      this.index();
      this.imageUrl = this.imageService.getImageUrl();
  }

  index() {
      this.loading = true;
      this.apiService.index('appointmentDetails').subscribe(data => {
          this.bannerList = data.data;
          this.loading = false;
      });
  }


  store() {
      this.loadingBtn = true;
      this.apiCall('store', 'appointmentDetails');
  }

  show(id) {
      this.apiService.show('appointmentDetails/' + id).subscribe((data) => {
          const value = data.data;
          this.description = value.message;
      });
  }

  update(id) {
      this.loadingBtn = true;
      this.apiCall('update', 'FaqLab/' + id);
  }

  destroy(id) {
      this.swalCall(id);
  }

  bannerSwitch(id) {
      this.apiCall('getData', 'FaqLabSwitch/' + id);
  }

  apiCall(name, url, value: any = '') {
      value = name === 'store' || name === 'update' ? {
        header: this.bannerName,
        header_answer: this.description,

      } : value;
      this.apiService[name](url, value).subscribe((data) => {
          if (data.error === false) {
              this.toastr.success(data.message);
              this.loadingBtn = false;
              this.popUpClose();
              this.index();
          } else {
              this.toastr.error(data.message);
              this.loadingBtn = false;
              this.errorMsg = data.data;
          }
      });
  }

  openModalBox(id = '') {
      if (id) {
          this.modalBoxName = 'View';
          this.show(id);
      } else {
          this.modalBoxName = 'Create';
      }
      this.showPopup = true;
  }

  popUpClose() {
      this.showPopup = false;
      this.bannerName  = this.editBannerId = '';
      this.description  = this.editBannerId = '';
      this.errorMsg = [];
      this.viewBox = false;
  }

  keyPress(event, type, id = '') {
      if (event.keyCode === 13) {
          if (type === 'Create') {
              this.store();
          } else if (type === 'Edit') {
              this.update(id);
          }
      }
  }

  swalCall(id) {
      Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this data!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, keep it'
      }).then((result) => {
          if (result.value) {
              this.apiCall('destroy', 'FaqLab/' + id);
              Swal.fire(
                  'Deleted!',
                  'Your data has been deleted.',
                  'success'
              );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                  'Cancelled',
                  'Your data is safe.',
                  'error'
              );
          }
      });
  }
}

