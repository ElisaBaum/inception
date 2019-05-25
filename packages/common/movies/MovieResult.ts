
interface GenreResult {
    id: number;
    name: string;
}

export interface MovieResult {
    id: number;
    poster_path: string;
    release_date: string;
    genres: GenreResult[];
    original_title: string;
    title: string;
}
