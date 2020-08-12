import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: Sequelize.STRING,
        bio: Sequelize.TEXT,
        avatar_url: Sequelize.STRING,
        html_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
