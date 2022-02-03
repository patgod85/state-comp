import { Post } from '../../model/post.model';
import { ListItemView } from '../listItem';

export interface IProps {
	posts: Post[];
}

export const PostsListView = (props: IProps) => {
	const { posts } = props;

	return (
		<>
			{posts.map(post => (
				<ListItemView key={post.id} post={post} />
			))}
		</>
	);
};
