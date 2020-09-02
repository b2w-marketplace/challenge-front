import { CoordinatesModel } from "./coordinates.model";
import { StreetModel } from "./street.model";
import { TimeZoneModel } from "./timezone.model";

export interface LocationModel {
    city: string;
    coordinates?: CoordinatesModel;
    country: string;
    postcode: any;
    state: string;
    street: StreetModel;
    timezone?: TimeZoneModel;
}