import { InfoModel } from "./info.model";
import { ResultModel } from "./result.model";

export interface UserModel {
     info?: InfoModel;
     results: ResultModel[];
}