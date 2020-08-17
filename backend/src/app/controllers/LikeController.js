import Like from '../models/Like';
import User from '../models/User';
import { Op } from 'sequelize';

class LikeController {
  async store(request, response) {
    try {
      const { emmiter, receive } = request.params;

      const userReceiveLike = await User.findByPk(receive);
      const userEmmiterLike = await User.findByPk(emmiter);

      if (!userEmmiterLike || !userReceiveLike) {
        return response.status(500).json({ error: 'User does not exists' });
      }

      const verifyExistsLike = await Like.findOne({
        where: {
          [Op.and]: [{ user_emmiter: receive }, { user_receive: emmiter }],
        },
      });

      if (verifyExistsLike) {
        await Like.update(
          { is_match: true },
          {
            where: {
              [Op.and]: [{ user_emmiter: receive }, { user_receive: emmiter }],
            },
          }
        );

        const userEmmiterLikeIo = request.connectedUsers[userEmmiterLike.id];
        const userReceiveLikeIo = request.connectedUsers[userReceiveLike.id];

        request.io.to(userEmmiterLikeIo).emit('match', userReceiveLike);
        request.io.to(userReceiveLikeIo).emit('match', userEmmiterLike);
      }

      await Like.create({
        user_emmiter: emmiter,
        user_receive: receive,
        is_match: verifyExistsLike ? true : false,
      });

      return response.status(201).send();
    } catch (error) {
      return response
        .status(500)
        .json({ error: 'Unexpected error while liking user' });
    }
  }
}

export default new LikeController();
