import { Model, ModelStatic } from "sequelize";

export type Options = {
  where?: any;
  include?: any[];
  fields?: any[];
  order?: any;
  limit?: number;
  transaction?: any;
};

export type PaginatedOptions = {
  offset?: number;
  page: number;
} & Options;

export default class BaseRepository<T> {
  private readonly model;

  constructor(model: ModelStatic<Model<T, any>>) {
    this.model = model;

    this.findOne = this.findOne.bind(this);
    this.findById = this.findById.bind(this);
    this.findByPk = this.findByPk.bind(this);
    this.findMany = this.findMany.bind(this);
    this.findManyPaginated = this.findManyPaginated.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  async findOne(options?: Options): Promise<T> {
    return this.model.findOne(options);
  }
  async findByPk(pk: string): Promise<T> {
    return this.model.findByPk(pk);
  }
  async findById(id: string): Promise<T> {
    return this.model.findOne({ where: { id } });
  }
  async findMany(options?: Options): Promise<T[]> {
    return this.model.findAll(options);
  }
  async findManyPaginated(options?: PaginatedOptions): Promise<T[]> {
    return [];
  }
  async destroy(options?: Options): Promise<any> {
    return this.model.destroy(options);
  }
}
