const { BaseModel } = require('./BaseModel');

class TransactionsOperationsModel extends BaseModel {
  static get idColumn() { return null; }
  static get tableName() { return 'transactions_operations' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        operation_type: { type: 'string' },
        contract_id: { type: 'string' },
        operation: { type: 'string' },
        order: { type: 'integer' },
        
        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
}

module.exports = {
  Model: TransactionsOperationsModel
}