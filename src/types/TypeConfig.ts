import { Types } from 'mongoose';
import { StrategyTenisDocument } from '../schemas/SchemaStrategyTenis';

export interface TypeConfig {
  _id: Types.ObjectId;
  CONFIG_USER: string;
  CONFIG_PASSWORD: string;
  CONFIG_TIME_START: string;
  CONFIG_TIME_FINISH: string;
  CONFIG_STATUS: boolean;
  CONFIG_ENTRIES: number;
  CONFIG_RESULT: number;
  CONFIG_STRATEGIES: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TypeConfigCreate {
  CONFIG_USER: string;
  CONFIG_PASSWORD: string;
}

export interface TypeConfigUpdate {
  CONFIG_USER?: string;
  CONFIG_PASSWORD?: string;
  CONFIG_TIME_START?: string;
  CONFIG_TIME_FINISH?: string;
  CONFIG_STATUS?: boolean;
}

export interface TypeConfigToScraper {
  _id: Types.ObjectId;
  CONFIG_USER: string;
  CONFIG_PASSWORD: string;
  CONFIG_TIME_START: string;
  CONFIG_TIME_FINISH: string;
  CONFIG_STATUS: boolean;
  CONFIG_ENTRIES: number;
  CONFIG_RESULT: number;
  CONFIG_STRATEGIES: StrategyTenisDocument[];
  createdAt: Date;
  updatedAt: Date;
}