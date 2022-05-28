import { Category } from './Category';
import { User } from '../../auth/services/user';

export interface Post {
  category: Category,
  category_id: number,
  created_at: string,
  deleted_at: string | null
  description: string,
  id: number,
  title: string,
  updated_at: string,
  user: User,
  user_id: number,
}
