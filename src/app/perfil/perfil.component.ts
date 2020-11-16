import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { formatDate } from "@angular/common";
import { ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarios;
  personalInfo;
  contactInfo;
  user;

  @ViewChild(NavbarComponent) child: NavbarComponent;

  constructor(private servicesService: ServicesService) {
  }

  ngOnInit(): void {

    // inicializar a variavel vazia
    this.user = [];

    // inicializar a variavel com meus dados
    this.usuarios = {
      name: {
        first: "Letícia",
        last: "Schneider"
      },

      location: {
        city: "São Paulo",
        country: "Brasil"
      },

      picture: {
        large: "https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/68953261_3669462096413010_4250914495049760768_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=tLd-QY7RnsoAX9wBvbO&_nc_oc=AQnwDY8RSMUeNVYDOEiIONmG2WxkR6VUZyhTfHR4KZiFfMTt1Z1l0ua1LwZtD-FqSWw&_nc_ht=scontent.fcgh10-1.fna&oh=416fa3587f833395dfcd457e7d01685a&oe=5FD750BC"
      },

      follow: false
    };

    this.personalInfo = [
      { label: "born At", value: "Guarulhos" },
      { label: "age", value: "24 years old" },
    ];

    this.contactInfo = [
      { label: "email", value: "leticia.schneider@fatec.sp.gov.br" },
      { label: "phone", value: "(11) 4797-2315" }
    ];

    // chamando a função para verificar se o usuário foi seguido
    this.verificarFollow();
  }

  // Função que carrega os dados do próximo usuário
  public consultarDados() {
    // chamando serviço que consultará o usuário
    this.servicesService.consultarUsuarios().subscribe((data) => {
      // armazenando o valor da 
      this.usuarios = data.results[0];

      // inicializar a variavel vazia
      this.personalInfo = [];
      this.personalInfo.addInfo = [];
      this.contactInfo = [];
      this.contactInfo.addInfo = [];

      // verificar cada item do objeto 
      for (let key in this.usuarios) {

        // se o item não for um objeto
        if (typeof this.usuarios[key] !== 'object') {
          // verificar se possui a chave email, ou a chave phone
          if (key == "email" || key == "phone") {
            // armazenar no array que contem as informações principais de contato
            this.contactInfo.push({ label: key, value: this.usuarios[key] });
          }

          // verificar se possui a chave cell
          if (key == "cell") {
            // armazenar no array que contem as informações adicionais de contato
            this.contactInfo.addInfo.push({ label: key, value: this.usuarios[key] });
          }

        } else {
          // Caso o item for um objeto
          // Percorrer cada item desse objeto
          for (let key2 in this.usuarios[key]) {
            // verificar se possui a chave age, ou a chave state
            if ((key2 == "age" && key == "dob")
              || (key2 == "state" && key == "location")) {
              // verificar se é state para trocar o valor para "born at",s e não for, manterá o valor da chave atual
              let label = key2 === "state" ? "born At" : key2;

              // armazenar no array que contém as informações pessoais principais
              this.personalInfo.push({ label: label, value: this.usuarios[key][key2] });
            }
            // verificar se possui a chave email, ou a chave phone
            if ((key2 == "date" && key == "dob")) {
              // armazenar no array que contém as informações pessoais adicionais
              this.personalInfo.addInfo.push({ label: key2, value: formatDate(this.usuarios[key][key2], 'dd/MM/yyyy', 'en-US') });
            }
          }
        }
      }

      // chamando a função para verificar se o usuário foi seguido
      this.verificarFollow();
    });
  }

  // Função para verificar se o usuário foi seguido ou não
  public verificarFollow() {
    // variavel para armazenar os dados que foram salvos no localstorage
    let localStorageUser = JSON.parse(localStorage.getItem("user"));
    // armazenar a imagem do usuário atual - se tornará o 'ID'
    let userID = this.usuarios.picture.large
    // armazenar o valor da variavel que foi alterada
    let newUset = [];

    // percorrer cada item do localStorageUser
    localStorageUser.forEach(function (value) {
      // se tiver o "id" no localstorage desse usuário que foi carregado
      if (userID == value.user) {
        // armazenar o valor que está no localstorage no usuário atual
        newUset.push({ follow: value.follow });
      }
    });

    // verificar se foi adicionado algo
    if (newUset.length > 0) {
      // armazenar o valor no usuário atual
      this.usuarios.follow = newUset[0].follow;
    }
  }

  // Função que será acionado quando adicionar o usuário
  public followUser() {
    // acionar que o usuário atual foi seguido
    this.usuarios.follow = true;

    // variavel para armazenar os dados que foram salvos no localstorage
    let localStorageUser = JSON.parse(localStorage.getItem("user"));
    // armazenar a imagem do usuário atual - se tornará o 'ID'
    let userID = this.usuarios.picture.large
    // variavel para armazenar os dados que foram salvos no localstorage para fazer manipulação
    let outroUser = JSON.parse(localStorage.getItem("user"));
    // flag para fazer verificação
    var entrou: boolean = false;
    // armazenar os dados do usuário atual
    let atualUser = this.usuarios

    // verificar se possui dados
    if (localStorageUser) {
      // percorrer cada item do localStorageUser
      localStorageUser.forEach(function (value, index) {
        // se tiver o "id" no localstorage desse usuário que foi carregado
        if (userID == value.user) {
          // alterar os valores
          // obs: como todos os valores vem random da API, atualizar com o valor atual
          outroUser[index].follow = true;
          outroUser[index].firstName = atualUser.name.first;
          outroUser[index].lastName = atualUser.name.last;
          outroUser[index].city = atualUser.location.city;
          outroUser[index].country = atualUser.location.country;
          entrou = true;
        }
      });

      // armazenar os dados da lista que foi modificada para a lista definitiva
      this.user = outroUser;
    }

    // verificar se houve alteração no dados 
    if (!entrou) {
      // caso não houver, criar uma lista com os novos dados
      this.user.push(
        {
          'user': this.usuarios.picture.large,
          'follow': true,
          'firstName': this.usuarios.name.first,
          'lastName': this.usuarios.name.last,
          'city': this.usuarios.location.city,
          'country': this.usuarios.location.country
        })
    }

    // armazenar os dados no localstorage
    localStorage.setItem('user', JSON.stringify(this.user));

    // chamando o método do filho para atualizar os dados
    this.child.consultarUsuarios(userID);
  }

  public unfollowUser() {
    this.usuarios.follow = false;

    // variavel para armazenar os dados que foram salvos no localstorage    
    this.user = JSON.parse(localStorage.getItem("user"));

    // armazenar a imagem do usuário atual - se tornará o 'ID'
    let userID = this.usuarios.picture.large

    // armazenar os dados do usuário atual
    let atualUser = this.usuarios

    // verificar se possui dados
    if (this.user) {
      // percorrer cada item do localStorageUser
      this.user.forEach(function (value) {
        // se tiver o "id" no localstorage desse usuário que foi carregado
        if (userID == value.user) {
          // alterar os valores
          // obs: como todos os valores vem random da API, atualizar com o valor atual
          value.follow = false;
          value.firstName = atualUser.name.first;
          value.lastName = atualUser.name.last;
          value.city = atualUser.location.city;
          value.country = atualUser.location.country;
        }
      });
    }

    // armazenar os dados no localstorage
    localStorage.setItem('user', JSON.stringify(this.user));

    // chamando o método do filho para atualizar os dados
    this.child.consultarUsuarios(userID);
  }
}
