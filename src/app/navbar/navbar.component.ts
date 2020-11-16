import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users; // armazenar os dados dos usuários que aparecerão no botão
  @Input() mostrarBotaoSeguidores: boolean = false; // flag para saber se vai mostrar ou não o botão
  @Input() usuarioAtual: String = "";
  constructor() { }

  ngOnInit(): void {
    this.users = [];
    this.consultarUsuarios(this.usuarioAtual);
  }

  // Função que consutara os usuarios
  // que estão no localstorage ( seguidos )
  public consultarUsuarios(usuarioAtual) {
    let user = []; // inicializar a variavel
    let followers = JSON.parse(localStorage.getItem("user")); // variavel para armazenar os dados que foram salvos no localstorage

    // se possui dados no localstorage
    if (followers) {
      // percorrer cada item
      followers.forEach(function (value) {
        // se tiver usuarios que estou seguindo
        if (value.follow == true && value.user != usuarioAtual) {
          // armazenar 
          user.push(value);
        }
      });

      // armazenar apenas 5 usuarios
      this.users = user.slice(0, 5)
    }

    this.usuarioAtual = usuarioAtual;
  }

  // Função para dar unfollow no usuário
  public followUser(id, value?) {

    // variavel para armazenar os dados que foram salvos no localstorage
    let followers = JSON.parse(localStorage.getItem("user"));

    // verificar se possui dados
    if (followers) {
      // percorrer os itens da lista
      followers.forEach(function (value) {
        // verificar se o item atual é o mesmo do usuário atual
        if (value.user == id) {
          // se for, armazenar o valor que vem da função
          value.follow = value != undefined ? false : true;
        }
      });
    }
    // armazenar os dados no localstorage
    localStorage.setItem('user', JSON.stringify(followers));

    // atualizar a lista de usuários
    this.consultarUsuarios(this.usuarioAtual);
  }

}
