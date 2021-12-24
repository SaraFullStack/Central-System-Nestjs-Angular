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
exports.UpdateChargePointDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_charge_point_dto_1 = require("./create-charge-point.dto");
const swagger_2 = require("@nestjs/swagger");
class UpdateChargePointDto extends swagger_1.PartialType(create_charge_point_dto_1.CreateChargePointDto) {
}
__decorate([
    swagger_2.ApiPropertyOptional(),
    __metadata("design:type", String)
], UpdateChargePointDto.prototype, "identity", void 0);
__decorate([
    swagger_2.ApiPropertyOptional(),
    __metadata("design:type", String)
], UpdateChargePointDto.prototype, "cpoId", void 0);
exports.UpdateChargePointDto = UpdateChargePointDto;
//# sourceMappingURL=update-charge-point.dto.js.map