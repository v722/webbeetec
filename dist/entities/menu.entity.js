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
var MenuItem_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
const typeorm_1 = require("typeorm");
let MenuItem = MenuItem_1 = class MenuItem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MenuItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MenuItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MenuItem.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: null }),
    __metadata("design:type", Number)
], MenuItem.prototype, "parent_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], MenuItem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], MenuItem.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => MenuItem_1),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], MenuItem.prototype, "menu_items", void 0);
MenuItem = MenuItem_1 = __decorate([
    (0, typeorm_1.Entity)('menu_items')
], MenuItem);
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu.entity.js.map