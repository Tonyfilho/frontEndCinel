import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { WeatherService } from '../../service/weather';
import { IWeather } from '../../shared/i-weather';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather implements OnInit {
  private weatherService = inject(WeatherService);
  protected formsWeather: UntypedFormGroup;
  protected localWeatherSig = signal<IWeather | undefined>(undefined);
  protected localCountry: string = 'Santana Portugal';
  private justLetter: RegExp = /^[a-zA-ZÀ-ÿ\s]+$/;

  constructor(private fb: UntypedFormBuilder) {
    this.formsWeather = fb.group({
      city: [Validators.required, Validators.pattern(this.justLetter)],
    });
  }

  ngOnInit(): void {
    this.localCountry === undefined ? this.formsWeather.get('city')?.value : this.localCountry;
    this.weatherService.getWeather2(this.localCountry).subscribe({
      next: (res) =>  {this.localWeatherSig.set(res), console.log("meu res", res)},
      error: (e) => console.error('Nosso Error no metodo getWeather2', e),
      complete: () => console.log('Fim do Observable'),
    });
  }

  submit() {
    this.localCountry = this.formsWeather.get('city')?.value;
    this.weatherService.getWeather(this.localCountry).subscribe({
      next: (res) => {
        (this.localWeatherSig.set(res), console.log('meu res em getWeather', res));
      },
      error: (e) => console.error('Nosso Error no metodo getWeather', e),
    });
  }
}
