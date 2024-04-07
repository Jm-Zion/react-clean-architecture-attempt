import { Brewery } from "../entities/brewery.entity";

export interface BreweriesRepository {
  getBreweries(): Promise<Brewery[]>;
}
