const { BaseModel } = require('./BaseModel');

class TransactionsModel extends BaseModel {
  static get idColumn() { return null; }
  static get tableName() { return 'tokens_transactions' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        operation: { type: 'string' },
        from: { type: 'string' },
        to: { type: 'string' },
        value: { type: 'string' },
        
        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
}

module.exports = {
  Model: TransactionsModel
}