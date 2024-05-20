import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from '../entities/list.entity';
import { Show } from 'src/entities/show.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List, Show, User])],
  controllers: [ListController],
  providers: [ListService]
})
export class ListModule {}
