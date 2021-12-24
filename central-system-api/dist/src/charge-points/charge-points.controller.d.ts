import { ChargePointsService } from './charge-points.service';
import { CreateChargePointDto } from './dto/create-charge-point.dto';
import { UpdateChargePointDto } from './dto/update-charge-point.dto';
import { ChargePoint } from './entities/charge-point.entity';
export declare class ChargePointsController {
    private readonly chargePointsService;
    constructor(chargePointsService: ChargePointsService);
    create(createChargePointDto: CreateChargePointDto): Promise<CreateChargePointDto & ChargePoint>;
    findAll(): Promise<ChargePoint[]>;
    update(id: string, updateChargePointDto: UpdateChargePointDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
