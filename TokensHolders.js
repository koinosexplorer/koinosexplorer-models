const { BaseModel } = require('./BaseModel');

class TransactionsHoldersModel extends BaseModel {
  static get idColumn() { return null }
  static get tableName() { return 'tokens_holders' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        holder: { type: 'string' },
        amount: { type: 'string' },        
        // relations
        token_id: { type: 'string' },
        
        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
}

module.exports = {
  Model: TransactionsHoldersModel
}