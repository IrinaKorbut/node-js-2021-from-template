import { createConnection, Connection } from 'typeorm';
import { ormConfig } from '../ormconfig';

export const TryDBConnect = async (): Promise<Connection> => createConnection(ormConfig);