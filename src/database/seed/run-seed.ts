import { users } from '../data/test-data/users';
import seed from './seed';
import { db } from '../db'

const runSeed = () => {
  return seed(users).then(() => db.end());
};

runSeed();