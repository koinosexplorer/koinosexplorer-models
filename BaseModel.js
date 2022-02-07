const { Model } = require('objection');
const moment = require('moment');

class BaseModel extends Model {
  $beforeInsert () {
    this.created_at = moment().format("YYYY-MM-DD HH:mm:ss")
    this.updated_at = moment().format("YYYY-MM-DD HH:mm:ss")
  }

  $beforeUpdate () {
    this.updated_at = moment().format("YYYY-MM-DD HH:mm:ss");
  }
}

module.exports = {
  BaseModel
};

