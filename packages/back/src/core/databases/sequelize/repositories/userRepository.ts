import User, { UserInstance } from '../models/User';
import BaseRepository from './BaseRepository';

class TicketRepository extends BaseRepository<UserInstance> {
  constructor() {
    super(User);
  }
}
export default new TicketRepository();
