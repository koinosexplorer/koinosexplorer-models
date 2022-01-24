const { BaseModel } = require('./BaseModel');

class BlocksModel extends BaseModel {
  static get idColumn() { return 'block_id'; }
  static get tableName() { return 'blocks' }
  static get jsonSchema() {
    return {
      type: 'object',

      properties: {
        block_num: { type: 'string' },
        producer: { type: 'string' },

        created_at: { type: 'datetime' },
        updated_at: { type: 'datetime' }
      }
    }
  }
}

module.exports = {
  Model: BlocksModel
}