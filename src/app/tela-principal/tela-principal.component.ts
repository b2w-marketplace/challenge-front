import { Component, OnInit  } from '@angular/core';
import { PessoasService } from '../service/pessoas.service';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})

export class TelaPrincipalComponent implements OnInit {

  pessoa = {} as Pessoa;
  pessoas = [];
  sugestoes = [];

  constructor(private pessoasService: PessoasService) {}

  ngOnInit() {

    this.pessoa = {
      name: {
        first: "Heitor",
        last: "Giovinazzo"
      },
      location: {
        city: "São Paulo",
        country: "Brasil"
      },

      picture: {
        large: "https://gunatord.sirv.com/foto.jpg"
      },
      seguido: true,
      gender: 'Male',
      email: 'heitorgiovinazzo@outlook.com',
      phone: '11 95451-1394',
      dob:{
        age: 23
      }
    };

    this.carregaTotalPessoasSeguidas();
    this.carregaSugestao();
  }

  getPessoa() {

    if (!this.pessoa.seguido) {
      this.salvaSugestao(this.pessoa);
    }

    this.pessoasService.getPessoa().subscribe((pessoas: any) => {
      this.pessoa = pessoas.results[0];
    });

  }

  public carregaTotalPessoasSeguidas() {
    this.pessoas = JSON.parse(localStorage.getItem("pessoa")) == null ? [] : JSON.parse(localStorage.getItem("pessoa"));
  }

  public deixarDeSeguir(user?) {
    this.pessoa.seguido = false;
    this.pessoas = JSON.parse(localStorage.getItem("pessoa"));
    let userImg = this.pessoa.picture.large;

    if (user) {
      userImg = user;
    }

    if (this.pessoa) {
      for (var i = 0; i < this.pessoas.length; i++) {
        if (userImg === this.pessoas[i]['userImg']) {
          this.pessoa.seguido = false;
          this.pessoas.splice(i, 1);
          break;
        }
      }
    }

    localStorage.setItem('pessoa', JSON.stringify(this.pessoas));

  }

  seguirPessoa(pessoa?) {

    let localStoragePessoa = JSON.parse(localStorage.getItem("pessoa"));
    let userImg = this.pessoa?.picture?.large;
    let outroUser = JSON.parse(localStorage.getItem("pessoa"));
    var jaSeguido: boolean = false;

    let pessoalAtual = this.pessoa;
    if (pessoa) {
      pessoalAtual = pessoa;
      userImg = pessoa.picture.large;

      this.removerSugestao(pessoa);
    }
    else {
      this.pessoa.seguido = true;
    }

    if (localStoragePessoa) {
      localStoragePessoa.forEach(function (value, i) {
        if (userImg == value.user) {
          outroUser[i].follow = true;
          outroUser[i].firstName = pessoalAtual.name.first;
          outroUser[i].lastName = pessoalAtual.name.last;
          outroUser[i].city = pessoalAtual.location.city;
          outroUser[i].country = pessoalAtual.location.country;
          jaSeguido = true;
        }
      });

      this.pessoas = outroUser;
    }

    if (!jaSeguido) {
      this.pessoas.push(
        {
          'userImg': pessoalAtual.picture.large,
          'follow': true,
          'firstName': pessoalAtual.name.first,
          'lastName': pessoalAtual.name.last,
          'city': pessoalAtual.location.city,
          'country': pessoalAtual.location.country
        })
    }

    localStorage.setItem('pessoa', JSON.stringify(this.pessoas));

  }

  salvaSugestao(pessoa) {
    if (this.sugestoes.length == 5) {
      this.sugestoes.pop();
    }
    this.sugestoes.unshift(
      {
        'picture': {
          'large': pessoa.picture.large,
        },
        'follow': false,
        'name': {
          'first': pessoa.name.first,
          'last': pessoa.name.last
        },
        'location': {
          'city': pessoa.location.city,
          'country': pessoa.location.country
        }
      }
    )

    localStorage.setItem('sugestao', JSON.stringify(this.sugestoes));
  }

  carregaSugestao() {
    this.sugestoes = JSON.parse(localStorage.getItem("sugestao")) == null ? [] : JSON.parse(localStorage.getItem("sugestao"));
  }

  removerSugestao(pessoa) {
    let userImg = pessoa.picture.large;

    this.sugestoes = this.sugestoes.filter(function(obj) {
      return obj.picture.large !== userImg;
    });

    localStorage.setItem('sugestao', JSON.stringify(this.sugestoes));
  }
}
