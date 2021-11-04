import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Mensagens} from '../models';
import {MensagensRepository} from '../repositories';

export class MensagensController {
  constructor(
    @repository(MensagensRepository)
    public mensagensRepository : MensagensRepository,
  ) {}

  @post('/mensagens')
  @response(200, {
    description: 'Mensagens model instance',
    content: {'application/json': {schema: getModelSchemaRef(Mensagens)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mensagens, {
            title: 'NewMensagens',
            exclude: ['id'],
          }),
        },
      },
    })
    mensagens: Omit<Mensagens, 'id'>,
  ): Promise<Mensagens> {
    return this.mensagensRepository.create(mensagens);
  }

  @get('/mensagens/count')
  @response(200, {
    description: 'Mensagens model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Mensagens) where?: Where<Mensagens>,
  ): Promise<Count> {
    return this.mensagensRepository.count(where);
  }

  @get('/mensagens')
  @response(200, {
    description: 'Array of Mensagens model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Mensagens, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Mensagens) filter?: Filter<Mensagens>,
  ): Promise<Mensagens[]> {
    return this.mensagensRepository.find(filter);
  }

  @patch('/mensagens')
  @response(200, {
    description: 'Mensagens PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mensagens, {partial: true}),
        },
      },
    })
    mensagens: Mensagens,
    @param.where(Mensagens) where?: Where<Mensagens>,
  ): Promise<Count> {
    return this.mensagensRepository.updateAll(mensagens, where);
  }

  @get('/mensagens/{id}')
  @response(200, {
    description: 'Mensagens model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Mensagens, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Mensagens, {exclude: 'where'}) filter?: FilterExcludingWhere<Mensagens>
  ): Promise<Mensagens> {
    return this.mensagensRepository.findById(id, filter);
  }

  @patch('/mensagens/{id}')
  @response(204, {
    description: 'Mensagens PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mensagens, {partial: true}),
        },
      },
    })
    mensagens: Mensagens,
  ): Promise<void> {
    await this.mensagensRepository.updateById(id, mensagens);
  }

  @put('/mensagens/{id}')
  @response(204, {
    description: 'Mensagens PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() mensagens: Mensagens,
  ): Promise<void> {
    await this.mensagensRepository.replaceById(id, mensagens);
  }

  @del('/mensagens/{id}')
  @response(204, {
    description: 'Mensagens DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.mensagensRepository.deleteById(id);
  }
}
