import BaseRepository, {
  Options,
  PaginatedOptions,
} from "../databases/sequelize/repositories/BaseRepository";

export default class BaseResource<T> {
  protected readonly repository: BaseRepository<T>;

  constructor(repository) {
    this.repository = repository;

    this.findOne = this.findOne.bind(this);
    this.findById = this.findById.bind(this);
    this.findByPk = this.findByPk.bind(this);
    this.findMany = this.findMany.bind(this);
    this.findManyPaginated = this.findManyPaginated.bind(this);
  }

  async findOne(options?: Options): Promise<T> {
    return this.repository.findOne(options);
  }
  async findByPk(pk: string): Promise<T> {
    return this.repository.findByPk(pk);
  }
  async findById(id: string): Promise<T> {
    return this.repository.findById(id);
  }
  async findMany(options?: Options): Promise<T[]> {
    return this.repository.findMany(options);
  }
  async findManyPaginated(options?: PaginatedOptions): Promise<T[]> {
    return [];
  }
}
