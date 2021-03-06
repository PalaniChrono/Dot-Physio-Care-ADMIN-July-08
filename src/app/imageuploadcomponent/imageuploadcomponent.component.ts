import { Component, OnInit,Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Homesection2Component } from '../homesection2/homesection2.component';
@Component({
  selector: 'app-imageuploadcomponent',
  templateUrl: './imageuploadcomponent.component.html',
  styleUrls: ['./imageuploadcomponent.component.css']
})
export class ImageuploadcomponentComponent implements OnInit {
  loadingBtn: boolean;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  loading: boolean;
  public files: NgxFileDropEntry[] = [];
  menu: string = this.route.snapshot.paramMap.get('id');
  show: boolean = false;
  HomeSectionOne: string;
  banner_1 : any = ""
  banner_2 : any = ""
  banner_3 : any = ""
  banner_4 : any = ""



  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private imageService: ImageService,
    private imageCompress: NgxImageCompressService
  ) { }
  @Input() data:any;
  @Input() card:any;

  ngOnInit() {

  }
  hide : boolean = false;

  public dropped(files: NgxFileDropEntry[]) {
    this.loading = true;

    this.files = [];
    this.files.push(files[files.length - 1]);

    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file(
          (ev) => {
            this.imageChangedEvent = { target: { files: [ev] } };
          });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }

    }

    this.openCommentPopUp();

  }

  deleteFile(index: number) {
    if (this.files.length !== 0) {
      this.files.splice(index, 1);
    }
    this.imageChangedEvent = '';
    this.croppedImage = '';
  }


  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.loading = false;
  }

  imageUpdateSubCategory(imageFile) {
    const formData: FormData = new FormData();
    formData.append('menu', this.data);
    // formData.append('menu', this.card);
    formData.append('image', imageFile);
    this.apiService.postData(formData, 'updateImage').subscribe(data => {
      if (data.error === false) {
        this.toastr.success(data.message);
        this.closeCommentPopUp();
        window.location.reload();
       } else {
        this.toastr.error(data.message);
      }
      this.loadingBtn = false;
    }, error => {
      this.loadingBtn = false;
    });
    this.hide = true;
  }

  convertFile() {
    this.loadingBtn = true;
    this.imageCompress.compressFile(this.croppedImage, -1, 75, 50).then(
      result => {
        console.log(result);
        var ImageURL = result;
        var block = ImageURL.split(';');
        var contentType = block[0].split(':')[1];
        var realData = block[1].split(',')[1];
        var blob = this.imageService.b64toBlob(realData, contentType);

        this.imageUpdateSubCategory(blob);
        console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
      });
  }


  openCommentPopUp() {
    this.show = true;
}
closeCommentPopUp() {
  this.show = false;


}


}
