import { Selector } from "@ngxs/store";
import { MoviesState, MoviesStateModel } from "./app.state";

export class MoviesQueries {
    // #region Selector   
    @Selector([MoviesState])
    public static get(state: MoviesStateModel) {
      return state;
    }
  
    @Selector([MoviesState])
    public static getMovies(state: MoviesStateModel) {
     
      return state.movies;
    }
    @Selector([MoviesState])
    public static getMoviesForm(state: MoviesStateModel) {
      return state.moviesForm;
    }
   
    //searchTerm
    @Selector([MoviesState])
    public static getSelectedMovies(state: MoviesStateModel) {
      return state.selectedMovies;
    }
  
  
    
    // #endregion Selector
  
  }