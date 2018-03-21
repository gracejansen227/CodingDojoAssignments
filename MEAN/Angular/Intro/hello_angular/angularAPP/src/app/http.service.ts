import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
      this.getPokemon();
      this.countAbilities();
  }
  getPokemon(){
      let charizard = this._http.get('https://pokeapi.co/api/v2/pokemon/6/');
      charizard.subscribe((data: any) =>
      console.log(` Hello, ${data.abilities[0].ability.name}`, data));
  }
  countAbilities(){
    let listPokemon = this._http.get('https://pokeapi.co/api/v2/ability/94/');
    listPokemon.subscribe((data:any) =>
    for (let i =0; i <= 9; i++)
    {
      let all_pokes = data.pokemon[i].pokemon.name;
      console.log( all_pokes);
      //console.log(`${data}.pokemon`, data));
    }
    }

};
