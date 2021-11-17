import { MoviesCategories } from "../model/movies.model";

export class AddMoviesCategories {
    static readonly type = '[MoviesCategories] Add';

    constructor(public payload: MoviesCategories) {
    }
}


export class GetMoviesCategoriess {
    static readonly type = '[MoviesCategories] Get';
}



export class UpdateMoviesCategories {
    static readonly type = '[MoviesCategories] Update';

    constructor(public payload: MoviesCategories) {
    }
}

export class DeleteMoviesCategories {
    static readonly type = '[MoviesCategories] Delete';

    constructor(public id: number) {
    }
}


export class SetSelectedMoviesCategories {
    static readonly type = '[MoviesCategories] Set';

    constructor(public payload: MoviesCategories) {
    }
}
export class SetSelectedMoviesCategoriesChanged {
    static readonly type = '[MoviesCategories] Selection changed';

    constructor() {
    }
}
