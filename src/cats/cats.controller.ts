import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }
    @Get('getAll') // Xử lý GET đến '/cats/getAll'
    findAllCats(): string {
        return 'This is hai pham';
    }
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}