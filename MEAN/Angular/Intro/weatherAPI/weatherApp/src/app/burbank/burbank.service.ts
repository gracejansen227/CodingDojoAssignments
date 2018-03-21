import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BurbankService {

  constructor(private _http: HttpClient) {
      //this.getWeather();

  }
  getBurbankWeather(){
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&APPID=caf7e404e0608de4f1e04640399f6f65');
      console.log(` Hello, ${data.weather}`, data));
  }
  // countAbilities(){
  //   let listPokemon = this._http.get('https://pokeapi.co/api/v2/ability/94/');
  //   listPokemon.subscribe((data:any) =>
  //   for (let i =0; i <= 9; i++)
  //   {
  //     let all_pokes = data.pokemon[i].pokemon.name;
  //     console.log( all_pokes);
  //     //console.log(`${data}.pokemon`, data));
  //   }
  //   }

};
