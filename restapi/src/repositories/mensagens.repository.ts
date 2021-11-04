import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Mensagens, MensagensRelations} from '../models';

export class MensagensRepository extends DefaultCrudRepository<
  Mensagens,
  typeof Mensagens.prototype.id,
  MensagensRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Mensagens, dataSource);
  }
}
