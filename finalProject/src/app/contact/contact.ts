import { Component } from '@angular/core';
import { Header } from "../body/header/header";
import { Footer } from "../body/footer/footer";

@Component({
  selector: 'app-contact',
  imports: [Header, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
