"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargePointsModule = void 0;
const common_1 = require("@nestjs/common");
const charge_points_service_1 = require("./charge-points.service");
const charge_points_controller_1 = require("./charge-points.controller");
const typeorm_1 = require("@nestjs/typeorm");
const charge_point_entity_1 = require("./entities/charge-point.entity");
let ChargePointsModule = class ChargePointsModule {
};
ChargePointsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([charge_point_entity_1.ChargePoint])],
        controllers: [charge_points_controller_1.ChargePointsController],
        providers: [charge_points_service_1.ChargePointsService],
    })
], ChargePointsModule);
exports.ChargePointsModule = ChargePointsModule;
//# sourceMappingURL=charge-points.module.js.map