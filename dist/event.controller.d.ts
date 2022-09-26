import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { Workshop } from './entities/workshop.entity';
export declare class EventController {
    private eventRepository;
    private workshopRepository;
    constructor(eventRepository: Repository<Event>, workshopRepository: Repository<Workshop>);
    getWarmupEvents(): Promise<Event[]>;
    getEventsWithWorkshops(): Promise<Event[]>;
    getFutureEventWithWorkshops(): Promise<any>;
}
