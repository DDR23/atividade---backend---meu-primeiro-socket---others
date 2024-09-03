import { Types } from 'mongoose';

export interface TypeConfig {
  CONFIG_USER: string;
  CONFIG_PASSWORD: string;
  CONFIG_TIME_START: string;
  CONFIG_TIME_FINISH: string;
  CONFIG_STATUS: boolean;
  CONFIG_ENTRIES: number;
  CONFIG_RESULT: number;
  CONFIG_STRATEGIES?: Types.ObjectId[];
}
