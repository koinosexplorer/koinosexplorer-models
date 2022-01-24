const { BaseModel } = require('./BaseModel');

class ContractsMetadataModel extends BaseModel {
  static get idColumn() { return 'id'; }
  static get tableName() { return 'contracts_metadata' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        value: { type: 'string' },
        
        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
  static get relationMappings() {
    return {
      contracts: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: require('./ContractsModel').Model,
        join: { from: 'contracts.contract_id', to: 'contracts_metadata.contract_id' },
        eager: {}
      }
    }
  }
}