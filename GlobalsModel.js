const { BaseModel } = require('./BaseModel');

class GlobalsModel extends BaseModel {
  static get idColumn() { return 'name'; }
  static get tableName() { return 'globals' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        name: { type: 'string' },
        value: { type: 'string' },
        
        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
}

module.exports = {
  Model: GlobalsModel
}