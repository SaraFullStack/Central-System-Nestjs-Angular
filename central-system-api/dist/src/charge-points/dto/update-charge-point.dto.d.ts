import { CreateChargePointDto } from './create-charge-point.dto';
declare const UpdateChargePointDto_base: import("@nestjs/common").Type<Partial<CreateChargePointDto>>;
export declare class UpdateChargePointDto extends UpdateChargePointDto_base {
    readonly identity: string;
    readonly cpoId: string;
}
export {};
