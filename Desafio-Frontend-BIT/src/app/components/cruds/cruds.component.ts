import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/randomUser.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-cruds',
  templateUrl: './cruds.component.html',
  styleUrls: ['./cruds.component.css']
})
export class CrudsComponent implements OnInit {

  users : any;
  erro : any;


  constructor(private crudService : CrudService) { }

  ngOnInit(): void {}

  getter(){
    this.crudService.getUsers().subscribe((data : Users) =>{

      this.users = data;
    },

      (error:any) =>{
        this.erro = error;
      })
  }

}
