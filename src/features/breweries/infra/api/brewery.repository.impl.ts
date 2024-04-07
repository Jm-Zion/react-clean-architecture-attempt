import { axiosInstance } from "../../../../api/axios";
import { Brewery } from "../../domains/entities/brewery.entity";
import { BreweriesRepository } from "../../domains/repository/breweries.repository";

export class BreweriesRepositoryImpl implements BreweriesRepository {
  async getBreweries(): Promise<Brewery[]> {
    const response = await axiosInstance.get("/breweries");
    return response.data;
  }
}
