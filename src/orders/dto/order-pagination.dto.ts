import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '@prisma/client';

import { PaginationDto } from '../../common/dto/pagination.dto';
import { OrderStatusList } from '../enum/order.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status?: OrderStatus;
}
