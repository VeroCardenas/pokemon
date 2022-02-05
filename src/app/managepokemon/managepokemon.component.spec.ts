import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync, inject } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { ManagepokemonComponent } from './managepokemon.component';
import { PokemonService } from './managepokemon.service';
import { of } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';


describe('ManagepokemonComponent', () => {
  let component: ManagepokemonComponent;
  let fixture: ComponentFixture<ManagepokemonComponent>;
  let pokemonService: PokemonService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagepokemonComponent ],
      providers: [
        PokemonService,
        MessageService,
      ],
      imports:[
        HttpClientModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(inject([PokemonService], (s: any) => {
    pokemonService = s;
    fixture = TestBed.createComponent(ManagepokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
