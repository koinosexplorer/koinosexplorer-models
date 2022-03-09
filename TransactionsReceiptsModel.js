const { BaseModel } = require('./BaseModel');

class TransactionsReceiptsModel extends BaseModel {
  static get idColumn() { return 'id'; }
  static get tableName() { return 'transactions_receipts' }
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
  Model: TransactionsReceiptsModel
}