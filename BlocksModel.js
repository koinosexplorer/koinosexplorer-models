const { BaseModel } = require('./BaseModel');

class BlocksModel extends BaseModel {
  static get idColumn() { return 'block_num'; }
  static get tableName() { return 'blocks' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        block_num: { type: 'integer' },
        producer: { type: 'string' },

        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }

  static get relationMappings() {
    return {
      blocks_metadata: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./BlocksMetadataModel').Model,
        join: { from: 'blocks.block_num', to: 'blocks_metadata.block_num' },
        eager: {}
      },
      blocks_receipts: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./BlocksReceiptsModel').Model,
        join: { from: 'blocks.block_num', to: 'blocks_receipts.block_num' },
        eager: {}
      },
      transactions: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TransactionsModel').Model,
        join: { from: 'blocks.block_num', to: 'transactions.block_num' },
        eager: {}
      },
      tokens: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TokensModel').Model,
        join: { from: 'blocks.block_num', to: 'tokens.block_num' },
        eager: {}
      }
    }
  }
}

module.exports = {
  Model: BlocksModel
}