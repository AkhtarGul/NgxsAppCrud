import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviesModalComponent } from './movies-modal/movies-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NgxsAppCrud';
  constructor(private modalService: NgbModal){

  }
ngOnInit(){

}
modalNew() {
  const modalRef = this.modalService.open(MoviesModalComponent, { size: 'lg', backdrop: 'static' });
  //modalRef.componentInstance.lesson = lesson;
  modalRef.result.then((result) => {
    if (result) {
      console.log(result);
    }
  });
}
}
