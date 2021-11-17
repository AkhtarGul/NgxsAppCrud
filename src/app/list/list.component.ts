import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MoviesCategories } from '../model/movies.model';
import { DeleteMoviesCategories, GetMoviesCategoriess, SetSelectedMoviesCategories } from '../store/app.actions';
import { MoviesQueries } from '../store/app.queries';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private store:Store) { }
  @Select(MoviesQueries.getMovies) movies$?: Observable<MoviesCategories[]>;

  ngOnInit(): void {
    this.store.dispatch(new GetMoviesCategoriess());
  }
  onDelete(payload: MoviesCategories) {
    this.store.dispatch(new DeleteMoviesCategories(payload.id!));
  }

  onSelectDlg(payload: MoviesCategories) {
    this.store.dispatch([new SetSelectedMoviesCategories(payload)]).subscribe(() => {
      //this.messageService.openDialog("MoviesDialog");

    });
  }


}
