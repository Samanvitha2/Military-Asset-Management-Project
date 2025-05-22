import Base from './base';
import Transfer from './transfer';
import Asset from './asset';
import Assignment from './assignment';
import Role from './role';
import User from './user';
import Expenditure from './expenditure';

const models = {
  Base,
  Transfer,
  Asset,
  Assignment,
  Role,
  User,
  Expenditure,
};

// Call associate for each model
Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

export default models; 