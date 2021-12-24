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
exports.ChargePointsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const charge_point_entity_1 = require("./entities/charge-point.entity");
const uuid_1 = require("uuid");
let ChargePointsService = class ChargePointsService {
    constructor(chargePointRepository) {
        this.chargePointRepository = chargePointRepository;
    }
    create(createChargePointDto) {
        createChargePointDto.id = uuid_1.v4();
        return this.chargePointRepository.save(createChargePointDto);
    }
    async findAll() {
        return await this.chargePointRepository.find({
            order: { identity: 'ASC' },
        });
    }
    update(id, updateChargePointDto) {
        return this.chargePointRepository.update(id, updateChargePointDto);
    }
    remove(id) {
        return this.chargePointRepository.delete(id);
    }
};
ChargePointsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(charge_point_entity_1.ChargePoint)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ChargePointsService);
exports.ChargePointsService = ChargePointsService;
//# sourceMappingURL=charge-points.service.js.map