import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Privacidades e senha', url: '/priv', icon: 'lock-closed' },
    { title: 'Moeda', url: '/moeda', icon: 'cash' },
    { title: 'Avaliar APP', url: '/avaliarapp', icon: 'thumbs-up' },
    { title: 'Idioma', url: '/idioma', icon: 'language' },
    { title: 'Sobre o Future Money', url: '/sobre', icon: 'trending-up' },
    { title: 'Ajuda', url: '/ajuda', icon: 'help' },
    { title: 'Desconectar Conta', url: '/folder/inbox', icon: 'enter' },
  ];
  public = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
