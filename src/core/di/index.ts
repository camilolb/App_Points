import {infrastructures} from './infrastructures';
import {appUseCases} from './useCases';
import {IUseCases} from './interfaces';
import {repositories} from './repositories';

const cInfrastructures = infrastructures();
const cRepositories = repositories(cInfrastructures);
const cUseCases = appUseCases(cRepositories);

export default {
  storeUseCase: cUseCases.storeUseCase,
  securityUseCase: cUseCases.securityUseCase,
} as IUseCases;
