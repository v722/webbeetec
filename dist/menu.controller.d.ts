import { Repository } from 'typeorm';
import { MenuItem } from './entities/menu.entity';
export declare class MenuController {
    private menuRepository;
    constructor(menuRepository: Repository<MenuItem>);
    getMenuItems(): Promise<any>;
}
