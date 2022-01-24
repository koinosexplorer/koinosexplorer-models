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
}

module.exports = {
  Model: ContractsModel
}