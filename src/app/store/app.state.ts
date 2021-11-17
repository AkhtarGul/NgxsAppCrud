import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { MoviesCategories } from "../model/movies.model";
import { AppService } from "../service/appservice.service";
import { AddMoviesCategories, DeleteMoviesCategories, GetMoviesCategoriess, SetSelectedMoviesCategories, UpdateMoviesCategories } from "./app.actions";
import  {tap} from "rxjs/operators"

export interface MoviesStateModel {
    movies: MoviesCategories[];    
    selectedMovies: MoviesCategories | null;
    error: string | null;
    pending: boolean;
   
    moviesForm:any;
   
}
@State<MoviesStateModel>({
    name: 'moviesStore',
    defaults: {
        movies: [],
        selectedMovies: { },
        error: null,
        pending: false,
        
        moviesForm:{
            model:  { },
               dirty : false,
               status : '',
               errors: null
            }
    }
})
@Injectable()
export class MoviesState {

    constructor(private appSrv: AppService,private store:Store) { }

   
    @Action(GetMoviesCategoriess)
    getMovies({ getState, setState }: StateContext<MoviesStateModel>) {

        return this.appSrv.getAll().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                movies: result
                        });
        }));
    }

    @Action(AddMoviesCategories)
    addMovies(
        { getState, patchState }: StateContext<MoviesStateModel>,
        { payload }: AddMoviesCategories
      ) {
        return this.appSrv.Add(payload).pipe(tap((res:any)=>{
            const state=getState();
        patchState({
            
            movies:[...state.movies,res]
           
        })
        
        }))
      }
  


      @Action(UpdateMoviesCategories)
      updateMovies({patchState,getState}:StateContext<MoviesStateModel>,{payload}:UpdateMoviesCategories){
         const state=getState();
         return this.appSrv.Update(payload,payload.id).pipe(tap((res:any)=>{
         
            const empUpdate=state.movies;
            const index=empUpdate.findIndex(i=>i.id==payload.id);
            empUpdate[index]=res
             patchState({
                     movies:empUpdate
             })
         }))
      }

  

    @Action(DeleteMoviesCategories)
    deleteMovies({ getState, setState }: StateContext<MoviesStateModel>, { id }: DeleteMoviesCategories) {
        return this.appSrv.Delete(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.movies.filter(item => item.id !== id);
            setState({
                ...state,
                movies: filteredArray,
            });
        }));
    }
 
    @Action(SetSelectedMoviesCategories)
    setSelectedMovies({ getState, setState,patchState }: StateContext<MoviesStateModel>, { payload }: SetSelectedMoviesCategories) {
        const state = getState();
        // patchState({
        //     clients: [...state.clients, result.data as IClient]
        // });
        patchState({
            ...state,
            selectedMovies: payload,  
        });
        
      
    }
}


