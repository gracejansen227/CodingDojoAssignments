import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChicagoService {

  constructor(private _http: HttpClient) { }

  getChicagoWeather(){
      return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=caf7e404e0608de4f1e04640399f6f65');
      console.log(` Hello, ${data.weather}`, data));
  }


}
