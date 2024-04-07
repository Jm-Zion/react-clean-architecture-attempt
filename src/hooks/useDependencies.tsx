import { createContext, createRef, useContext } from "react";
import { BreweriesRepositoryImpl } from "../features/breweries/infra/api/brewery.repository.impl";
import { BreweriesRepository } from "../features/breweries/domains/repository/breweries.repository";

type TDependencies = {
  breweriesRepository: BreweriesRepository;
};

const dependencies: TDependencies = {
  breweriesRepository: new BreweriesRepositoryImpl(),
};

const DependenciesContext = createContext(dependencies);

export const DependenciesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DependenciesContext.Provider value={dependencies}>
      {children}
    </DependenciesContext.Provider>
  );
};

export const useDependencies = () => {
  const context = useContext(DependenciesContext);
  return context;
};
