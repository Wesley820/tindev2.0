import Sequelize, { Model } from 'sequelize';

class Like extends Model {
  static init(sequelize) {
    super.init(
      {
        user_emmiter: Sequelize.INTEGER,
        user_receive: Sequelize.INTEGER,
        is_match: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default Like;
