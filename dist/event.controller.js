"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const event_entity_1 = require("./entities/event.entity");
const workshop_entity_1 = require("./entities/workshop.entity");
let EventController = class EventController {
    constructor(eventRepository, workshopRepository) {
        this.eventRepository = eventRepository;
        this.workshopRepository = workshopRepository;
    }
    getWarmupEvents() {
        const events = this.eventRepository.find();
        return events;
    }
    async getEventsWithWorkshops() {
        const events = await this.eventRepository.find();
        const workshops = await this.workshopRepository.find();
        for (let event of events) {
            event["workshop"] = [];
            workshops.map(workshop => {
                if (event.id === workshop.event_id) {
                    event["workshop"].push(Object.assign({}, workshop));
                }
            });
        }
        return events;
    }
    async getFutureEventWithWorkshops() {
        const date = new Date();
        const response = await this.eventRepository.query(`Select * from events as ev INNER JOIN workshops on workshops.event_id = ev.id where ev.created_at < "${date.toISOString()}" `);
        return response;
    }
};
__decorate([
    (0, common_1.Get)('warmupevents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventController.prototype, "getWarmupEvents", null);
__decorate([
    (0, common_1.Get)('events'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getEventsWithWorkshops", null);
__decorate([
    (0, common_1.Get)('futureevents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventController.prototype, "getFutureEventWithWorkshops", null);
EventController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __param(1, (0, typeorm_1.InjectRepository)(workshop_entity_1.Workshop)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EventController);
exports.EventController = EventController;
//# sourceMappingURL=event.controller.js.map