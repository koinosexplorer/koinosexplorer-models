const { BaseModel } = require('./BaseModel');

class BlocksMetadataModel extends BaseModel {
  static get idColumn() { return 'id'; }
  static get tableName() { return 'blocks_metadata' }
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
}

module.exports = {
  Model: BlocksMetadataModel
}