import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagsImg } from "./tags-img/tags-img";
import { TagsSemanticas } from "./tags-semanticas/tags-semanticas";
import { TagsVideo } from "./tags-video/tags-video";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagsImg, TagsSemanticas, TagsVideo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula03');
}
