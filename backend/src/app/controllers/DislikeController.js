import Dislike from '../models/Dislike';
import User from '../models/User';

class DislikeController {
  async store(request, response) {
    try {
      const { emmiter, receive } = request.params;

      if (!(await User.findByPk(emmiter)) || !(await User.findByPk(receive))) {
        return response.status(404).json({ error: 'User does not exists' });
      }

      await Dislike.create({
        user_emmiter: emmiter,
        user_receive: receive,
      });

      return response.status(201).send();
    } catch (error) {
      return response
        .status(500)
        .json({ error: 'Unexpected error while disliking user' });
    }
  }
}

export default new DislikeController();
