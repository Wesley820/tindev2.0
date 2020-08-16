import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';
import Like from '../app/models/Like';
import Dislike from '../app/models/Dislike';

const connection = new Sequelize(dbConfig);

User.init(connection);
Like.init(connection);
Dislike.init(connection);

export default connection;
