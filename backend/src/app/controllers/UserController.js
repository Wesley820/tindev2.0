import User from '../models/User';
import axios from 'axios';

class UserController {
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
          const { bio, avatar_url, html_url } = getUser.data;

          const newUserRegister = await User.create({
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
