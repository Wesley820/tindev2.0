import Sequelize, { Model } from 'sequelize';

class Dislike extends Model {
  static init(sequelize) {
    super.init(
      {
        user_emmiter: Sequelize.INTEGER,
        user_receive: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Dislike;
