import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from '../entities/list.entity';

@Injectable()
export class ListService {
    constructor(
        @InjectRepository(List)
        private listRepository: Repository<List>
    ) {}

    async listItems(userId: number, pageNumber: number) {
        const pageSize = 5; // assuming pagesize to be 10 for now
        const userData = await this.listRepository.find({
            where: {
                userId: userId,
                is_active: true
            },
            skip: (pageNumber - 1) * pageSize,
            take: pageSize
        });
        return userData;
    }

    async addShow(id: number, userId: number) {
        const showExist = await this.listRepository.find({
            where: {
                id: id,
                userId: userId,
                is_active: true
            }
        });
        if (showExist && showExist.length > 0) {
            return "Show is already added";
        }
        const newList = new List();
        newList.showId = id;
        newList.userId = userId;
        await this.listRepository.save(newList);
        return "Show has been added to the list"
    }

    async removeShow(id: number, userId: number) {
        await this.listRepository.delete({
            showId: id,
            userId: userId
        });
        return "Removed show from the list";
    }
}
