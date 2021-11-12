import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Tasks extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  task: string;

  @property({
    type: 'string',
    required: true,
  })
  user: string;

  @property({
    type: 'date',
    required: true,
  })
  inicio: string;

  @property({
    type: 'date',
    required: true,
  })
  fim: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tasks>) {
    super(data);
  }
}

export interface TasksRelations {
  // describe navigational properties here
}

export type TasksWithRelations = Tasks & TasksRelations;
