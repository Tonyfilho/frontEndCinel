import { Injectable } from '@angular/core';
import { keys } from '../../environment/environment.keys';
import { HttpClient } from '@angular/common/http';
import { IWeather } from '../shared/i-weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiURL = 'https://api.weatherapi.com/v1/current.json';
  private readonly apiKey = keys.key;

  constructor(private httpClient: HttpClient) {}

  /**Por Propriedade */
  getWeather = (city: string) => {
    return this.httpClient.get<IWeather>(`${this.apiURL}?key=${this.apiKey}&q=${city}&aqi=no`);
  };

  /**Por metodo */
  getWeather2(city: string) {
    return this.httpClient.get<any>(`${this.apiURL}?key=${this.apiKey}&q=${city}&aqi=no`);
  }
}
