import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Avatar } from "../avatar/avatar";

@Component({
  selector: 'app-header',
  imports: [RouterLink, Avatar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
