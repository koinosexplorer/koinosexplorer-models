const { BaseModel } = require('./BaseModel');

class TokensModel extends BaseModel {
  static get idColumn() { return 'token_id'; }
  static get tableName() { return 'tokens' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        token_id: { type: 'string' },
        name: { type: 'string' },
        symbol: { type: 'string' },
        decimals: { type: 'string' },
        
        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
  static get relationMappings() {
    return {
      tokens_metadata: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TokensMetadataModel').Model,
        join: { from: 'tokens.token_id', to: 'tokens_metadata.token_id' },
        eager: {}
      },
      tokens_transactions: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TokensTransactionModel').Model,
        join: { from: 'tokens.token_id', to: 'tokens_transactions.token_id' },
      },
      tokens_holders: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TokensHolders').Model,
        join: { from: 'tokens.token_id', to: 'tokens_holders.token_id' },
      }
    }
  }
}

module.exports = {
  Model: TokensModel
}