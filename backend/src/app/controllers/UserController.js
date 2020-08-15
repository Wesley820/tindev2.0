import User from '../models/User';
import axios from 'axios';
import { Op, Sequelize } from 'sequelize';

class UserController {
  async index(request, response) {
    try {
      const myId = request.params.id;

      const users = await User.findAll({
        where: {
          [Op.not]: [{ id: myId }],
        },
        order: Sequelize.literal('random()'),
      });

      return response.json(users);
    } catch (error) {
      return response
        .status(500)
        .json({ error: 'Unexpected error when trying fetch users' });
    }
  }

  async user(request, response) {
    try {
      const { username } = request.body;

      if (!username) {
        return response.status(400).json({ error: 'Username is required.' });
      }

      const user = await User.findOne({ where: { username } });

      if (!user) {
        const url = `https://api.github.com/users/${username}`;

        try {
          const getUser = await axios.get(url);
          const { name, bio, avatar_url, html_url } = getUser.data;

          const newUserRegister = await User.create({
            name,
            username,
            bio,
            avatar_url,
            html_url,
          });

          return response.status(201).json(newUserRegister);
        } catch (error) {
          return response
            .status(400)
            .json({ error: 'This user does not exist.' });
        }
      }

      return response.json(user);
    } catch (error) {
      return response.status(500).json({ error: 'Internal server error.' });
    }
  }
}

export default new UserController();
