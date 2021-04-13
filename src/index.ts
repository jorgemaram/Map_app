import { Driver } from "./Driver";
import { Map } from "./Map";
import { Passenger } from "./Passenger";

let map = new Map("map");
const driver = new Driver();
const passenger = new Passenger();

map.AddDriverMarker(driver);
map.AddPassengerMarker(passenger);

