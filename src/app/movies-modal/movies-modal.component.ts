import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MoviesCategories } from '../model/movies.model';
import { AddMoviesCategories, SetSelectedMoviesCategories, UpdateMoviesCategories } from '../store/app.actions';
import { MoviesQueries } from '../store/app.queries';

@Component({
  selector: 'app-movies-modal',
  templateUrl: './movies-modal.component.html',
  styleUrls: ['./movies-modal.component.css']
})
export class MoviesModalComponent implements OnInit {

  //#region Selectors
  public submitted: boolean = false;
  public moviesForm!: FormGroup;

  get f() {
    return this.moviesForm?.controls;
  }

  
  // 
  @Select(MoviesQueries.getMoviesForm) form$!: Observable<any>;
  @Select(MoviesQueries.getSelectedMovies) selectedMovies$?: Observable<MoviesCategories>;
  //#endregion Selectors
  constructor(private store: Store,
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.bindMoviesFormGroup();
  }
//#region Form Code
bindMoviesFormGroup() {
    this.moviesForm = this.formBuilder.group({
      id: [0],
      
      name: ["", [Validators.required, Validators.minLength(3)]],
     
      
    }
    ,{updateOn: 'blur'}); 
    this.selectedMovies$?.subscribe(data => {
     //console.log("selected value is :");console.log(data);
      this.moviesForm.patchValue(data);
      //console.log("form patched value is :");console.log(this.moviesForm.getRawValue());
    });


  }

  onSubmit() {
    if (this.moviesForm) {
      if (this.moviesForm.valid) {
        console.log(this.moviesForm.value);
        if (this.moviesForm.get("id")?.value !== 0) {
          this.store.dispatch([new UpdateMoviesCategories(this.moviesForm.value)]).subscribe(()=>{
            this.activeModal.close()
          });
        }
        else
        {
          console.log(this.moviesForm.value);
          this.store.dispatch([new AddMoviesCategories(this.moviesForm.value)]).subscribe(()=>{
            this.activeModal.close()
          });
        }
      }
      else if (this.moviesForm.invalid) {
        //this.log.Information("loginForm.invalid");
        return;
      }

    }
  }
  onCancel() {
    this.activeModal.close();
    this.store.dispatch(new SetSelectedMoviesCategories(this.moviesForm.value));
    this.moviesForm.reset();
  }
  //#endregion Form Code



}
