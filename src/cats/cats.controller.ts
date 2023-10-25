import { Controller, HttpException, HttpStatus, Get, Post, Body, UseFilters, ForbiddenException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';
import { HttpExceptionFilter } from './http-exception-filter';
import { User } from './cats.decorater';
import { UserEntity } from './cats.entity';
@Controller('cats')
@UseFilters(new HttpExceptionFilter())
export class CatsController {
    constructor(private catsService: CatsService) { }
    // @Get('getAll') // Xử lý GET đến '/cats/getAll'
    // findAllCats(): string {
    //     return 'This is hsdfdsdsdasdi phasdsdsdm';
    // }
    @Get('getanimae') // Xử lý GET đến '/cats/getAll'
    findAllanimals(): string {
        return 'This is hsdfdsdsdasdi phasdsdsdm';
    }
    @Get('getAll')
    async findAllCats() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        throw new ForbiddenException();
    }

    @Get()
    async findAll() {
        const users = this.catsService.findAllCats();
        console.log(users);
    }

}