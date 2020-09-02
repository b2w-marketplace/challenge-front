import { ID } from "./id.model";
import { LocationModel } from "./location.model";
import { LoginModel } from "./login.model";
import { NameModel } from "./name.model";
import { PictureModel } from "./picture.model";
import { RegisteredModel } from "./registered.model";

export interface ResultModel {
     name: NameModel;
     email: string;
     id?: ID;
     gender: string;
     dob: RegisteredModel;
     location: LocationModel;
     login: LoginModel;
     nat?: string;
     phone: string;
     cell: string;
     picture?: PictureModel;
     registered: RegisteredModel;
}