import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from './managepokemon.service';

@Component({
  selector: 'app-managepokemon',
  templateUrl: './managepokemon.component.html',
  styleUrls: ['./managepokemon.component.css']
})
export class ManagepokemonComponent implements OnInit {

  @ViewChild('schemeForm') private pokemonForm?: NgForm; 
  pokemonSearch: any;
  columns: any[];
  pokemons: Pokemon[];
  pokemon: Pokemon;
  showPokemon: boolean;
  // identificador del creador
  idAuthor: number;
  types: any[];
  constructor(
    private _pokenService: PokemonService,
    private _messageService: MessageService,
  ) { 
    this.columns = []
    this.pokemons = []
    this.pokemon = new Pokemon();
    this.showPokemon = false;
    this.idAuthor = 4;
    this.types = [
      {label: 'Agua', value: 'water'},
      {label: 'Fuego', value: 'fire'},
      {label: 'Normal', value: 'normal'},
      {label: 'Bug', value: 'bug'},
      {label: 'Venenoso', value: 'poison'},
    ]
  }

  ngOnInit(): void {
    this.columns = [
      {code: '', header: 'Nombre'},
      {code: '', header: 'Imagen'},
      {code: '', header: 'Ataque'},
      {code: '', header: 'Defensa'},
      {code: '', header: 'Acciones'},
    ]
    this.search()
  }
  addNewPokemon(){
    this.pokemon = new Pokemon();
    this.pokemon.idAuthor = this.idAuthor
    this.showPokemon = true;
  }

  search(){
    this._pokenService.getPokemons( this.idAuthor, this.pokemonSearch).subscribe(res=>{
      this.pokemons = res;
    })
  }

  editPokemon(pokemon: Pokemon, index: number){
    this.pokemon = pokemon;
    this.showPokemon = true;
  }
  savePokemon(){
    if (!this.pokemon.id){
      this._pokenService.savePokemon(this.pokemon,this.idAuthor ).subscribe(res=>{
        this.pokemon = res;
        this.pokemons.push(this.pokemon)
        this.showPokemon = false
        this._messageService.add(
          {severity:'success', summary:'Guardado exitosamente'});

      }, error => {
        this.showError(error)
        
      })
    } else {
      this.pokemon.updated_at = new Date()
      this._pokenService.updatePokemon(this.pokemon, this.pokemon.id).subscribe(res=>{
        this.pokemon = res
        this.showPokemon = false
        this._messageService.add(
          {severity:'success', summary:'Actualizado exitosamente'});
      }, error => {
        this.showError(error)
        
      })
    }
  }

  deletePokemon(pokemon: Pokemon, index: number){
    this._pokenService.deletePokemon(pokemon.id).subscribe(res=>{
      this.pokemons.splice(index, 1)
      this._messageService.add(
        {severity:'success', summary:'Eliminado exitosamente'});
    }, error => {
      this.showError(error)
      
    })
  }

  cancel(){
    this.showPokemon = false;
  }

  showError(error: any){
    var errors = error.error
    if (errors.data.errors.type){
      let errorDetail: string = errors.data.errors.type.join('\n');

      this._messageService.add({severity:'error', summary:'Ocurrió un error', detail: errorDetail});
      console.error('Ocurrió un error', errors.data.errors.type)
    } else {
      console.error('Ocurrió un error', errors)
    }
    
    
  }
}
