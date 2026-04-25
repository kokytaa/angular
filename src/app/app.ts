import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports:[RouterOutlet,RouterLink],
  standalone:true
})
export class App {
email: string="med@gmail.com"}
