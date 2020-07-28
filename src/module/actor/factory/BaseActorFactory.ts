import { ISR5BaseActorDataContainer } from '../SR5BaseActor';
import AbstractActorFactory, { ActorFactoryData, IPreCreateActorData } from './AbstractActorFactory';

export default abstract class BaseActorFactory extends AbstractActorFactory<ISR5BaseActorDataContainer> {
    public create(data: IPreCreateActorData): ActorFactoryData<ISR5BaseActorDataContainer> {
        return {
            name: data.name,
            type: data.type,
            data: {},
            flags: {},
            img: '',
        };
    }
}