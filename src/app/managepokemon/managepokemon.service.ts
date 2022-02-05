import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {

    private _urlshare: string = "https://pokemon-pichincha.herokuapp.com/pokemons";

    constructor(
        private readonly _http: HttpClient,
    ) {
    }

    getPokemons(idAuthor: Number, name: String): Observable<Pokemon[]> {
        let url = `${this._urlshare}`
        let params = new HttpParams();
        if ( idAuthor !== undefined) {
            params = params.append('idAuthor', String(idAuthor));
        }
        if (name) {
            params = params.append('name', String(name));
        }
        return this._http.get<Pokemon[]>(url, { params: params }).pipe();
    }

    savePokemon(pokemon: Pokemon, idAuthor: Number) : Observable<Pokemon>  {
        
        let url = `${this._urlshare}?${idAuthor}`
        return this._http.post<Pokemon>(url, pokemon,).pipe();
    }


    updatePokemon(pokemon: Pokemon, id: Number) {
        let url = `${this._urlshare}/${id}`
        return this._http.put<Pokemon>(url, pokemon, ).pipe();
    }

    deletePokemon(id: Number) {
        let url = `${this._urlshare}/${id}`
        return this._http.delete<Pokemon>(url, ).pipe();
    }

}
