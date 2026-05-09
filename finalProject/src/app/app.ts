import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./body/header/header";
import { Footer } from "./body/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('finalProject');
}
