import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
    constructor(private readonly listService: ListService) {}

    @Get('items/:userId/:pageNumber')
    listItems(@Param('userId') userId: number, @Param('pageNumber') pageNumber: number) {
        pageNumber = pageNumber > 0 ? pageNumber : 1;
        try {
            return this.listService.listItems(userId, pageNumber)
        } catch (err) {
            throw "Something went wrong!";
        }
    }

    @Post('add/:id/:userId')
    addShow(@Param('id') id: number, @Param('userId') userId: number) {
        try {
            return this.listService.addShow(id, userId)
        } catch (err) {
            throw "Something went wrong!";
        }
    }

    @Delete('remove/:id/:userId')
    delete(@Param('id') id: number, @Param('userId') userId: number) {
        try {
            return this.listService.removeShow(id, userId)
        } catch (err) {
            throw "Something went wrong!";
        }
    }
}
