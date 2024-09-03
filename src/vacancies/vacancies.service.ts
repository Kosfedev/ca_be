import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';
import { Vacancy } from './entities/vacancy.entity';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { CreateVacancyDto } from './dto/create-vacancy.dto';

@Injectable()
export class VacanciesService {
  constructor(
    @InjectModel(Vacancy.name) private vacancyModel: Model<Vacancy>,
  ) {}

  async create(createVacancyDto: CreateVacancyDto): Promise<Vacancy> {
    const createdVacancy = new this.vacancyModel(createVacancyDto);
    return createdVacancy.save();
  }

  async findAll(filter: Partial<Omit<Vacancy, 'id'>>): Promise<Vacancy[]> {
    return this.vacancyModel.find(filter).exec();
  }

  async findOne(id: number): Promise<Vacancy> {
    return this.vacancyModel.findOne({ id }).exec();
  }

  async update(
    id: number,
    updateVacancyDto: UpdateVacancyDto,
  ): Promise<Vacancy> {
    return this.vacancyModel.findOneAndUpdate({ id }, updateVacancyDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.vacancyModel.deleteOne({ id });
  }
}
