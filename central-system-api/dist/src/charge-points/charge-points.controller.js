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
exports.ChargePointsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const charge_points_service_1 = require("./charge-points.service");
const create_charge_point_dto_1 = require("./dto/create-charge-point.dto");
const update_charge_point_dto_1 = require("./dto/update-charge-point.dto");
const charge_point_entity_1 = require("./entities/charge-point.entity");
let ChargePointsController = class ChargePointsController {
    constructor(chargePointsService) {
        this.chargePointsService = chargePointsService;
    }
    create(createChargePointDto) {
        return this.chargePointsService.create(createChargePointDto);
    }
    async findAll() {
        return await this.chargePointsService.findAll();
    }
    update(id, updateChargePointDto) {
        return this.chargePointsService.update(id, updateChargePointDto);
    }
    remove(id) {
        return this.chargePointsService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ description: 'Create Charge Point' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, description: 'Create successfully', type: charge_point_entity_1.ChargePoint }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_charge_point_dto_1.CreateChargePointDto]),
    __metadata("design:returntype", void 0)
], ChargePointsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ description: 'Search Charge Points' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, description: 'Create successfully', type: charge_point_entity_1.ChargePoint }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChargePointsController.prototype, "findAll", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOperation({ description: 'Update Charge Point' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, description: 'Update successfully' }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_charge_point_dto_1.UpdateChargePointDto]),
    __metadata("design:returntype", void 0)
], ChargePointsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ description: 'Delete Charge Point' }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, description: 'Delete successfully' }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChargePointsController.prototype, "remove", null);
ChargePointsController = __decorate([
    swagger_1.ApiTags('Charge-points'),
    common_1.Controller('charge-points'),
    __metadata("design:paramtypes", [charge_points_service_1.ChargePointsService])
], ChargePointsController);
exports.ChargePointsController = ChargePointsController;
//# sourceMappingURL=charge-points.controller.js.map