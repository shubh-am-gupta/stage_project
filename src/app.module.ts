import { Module } from '@nestjs/common';
import { ListModule } from './list/list.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Show } from './entities/show.entity';
import { User } from './entities/user.entity';

const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'stagedb',
  entities: [List, Show, User],
  synchronize: true
};

@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), 
  ListModule]
})
export class AppModule {}
