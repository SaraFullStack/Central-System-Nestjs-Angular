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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargePoint = void 0;
const organization_entity_1 = require("../../organizations/entities/organization.entity");
const typeorm_1 = require("typeorm");
let ChargePoint = class ChargePoint {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ChargePoint.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
    }),
    __metadata("design:type", String)
], ChargePoint.prototype, "identity", void 0);
__decorate([
    typeorm_1.ManyToOne(() => organization_entity_1.Organization, { eager: true }),
    __metadata("design:type", organization_entity_1.Organization)
], ChargePoint.prototype, "cpo", void 0);
ChargePoint = __decorate([
    typeorm_1.Entity()
], ChargePoint);
exports.ChargePoint = ChargePoint;
//# sourceMappingURL=charge-point.entity.js.map