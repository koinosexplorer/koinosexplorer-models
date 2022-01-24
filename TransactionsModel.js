const { BaseModel } = require('./BaseModel');

class TransactionsModel extends BaseModel {
  static get idColumn() { return 'transaction_id'; }
  static get tableName() { return 'transactions' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        transaction_id: { type: 'string' },
        operation: { type: 'string' },
        contract_id: { type: 'string' },
        caller: { type: 'string' },

        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
  static get relationMappings() {
    return {
      blocks: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: require('./BlocksModel').Model,
        join: { from: 'blocks.block_num', to: 'blocks_metadata.block_num' },
        eager: {}
      }
    }
  }
}

module.exports = TransactionsModel