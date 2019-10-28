import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const CheckisProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!CheckisProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can load notifications' });
    }
    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    const notify = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notify);
  }
}

export default new NotificationController();
