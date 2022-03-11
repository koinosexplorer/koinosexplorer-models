const { BaseModel } = require('./BaseModel');

class ContractsModel extends BaseModel {
  static get idColumn() { return 'contract_id'; }
  static get tableName() { return 'contracts' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        contract_id: { type: 'string' },
        address_upload: { type: 'string' },
        transactions_upload: { type: 'string' },

        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
  static get relationMappings() {
    return {
      contracts_metadata: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./ContractsMetadataModel').Model,
        join: { from: 'contracts.contract_id', to: 'contracts_metadata.contract_id' },
        eager: {}
      },
      tokens: {
        relation: BaseModel.HasManyRelation,
        modelClass: require('./TokensModel').Model,
        join: { from: 'contracts.contract_id', to: 'tokens.contract_id' },
      }
    }
  }
}

module.exports = {
  Model: ContractsModel
}