const { BaseModel } = require('./BaseModel');

class TransactionsModel extends BaseModel {
  static get idColumn() { return 'transaction_id'; }
  static get tableName() { return 'transactions' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        transaction_id: { type: 'string' },
        operations: { type: 'integer' },
        caller: { type: 'string' },
        block_num: { type: 'string' },

        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
  static get relationMappings() {
    return {
      transactions_metadata: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TransactionsMetadataModel').Model,
        join: { from: 'transactions.transaction_id', to: 'transactions_metadata.transaction_id' },
        eager: {}
      },
      transactions_operations: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TransactionsOperationsModel').Model,
        join: { from: 'transactions.transaction_id', to: 'transactions_operations.transaction_id' },
        eager: {}
      },
      tokens: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TokensModel').Model,
        join: { from: 'transactions.transaction_id', to: 'tokens.transaction_id' },
        eager: {}
      },
      tokens_transactions: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TokensTransactionModel').Model,
        join: { from: 'transactions.transaction_id', to: 'tokens_transactions.transaction_id' },
        eager: {}
      }
    }
  }
}

module.exports = {
  Model: TransactionsModel
}