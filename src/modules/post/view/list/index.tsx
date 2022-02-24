import { Post } from '../../model/post.model';
import { ListItemView } from '../listItem';

export interface IProps {
	posts: Post[];
	expandedPosts: number[];

	onExpandPost: (id: number) => void;
}

export const PostsListView = (props: IProps) => {
	const { posts, expandedPosts, onExpandPost } = props;

	return (
		<>
			{posts.map(post => {
				const isExpanded = expandedPosts.includes(post.id);

				return <ListItemView key={post.id} post={post} isExpanded={isExpanded} onExpandPost={onExpandPost} />;
			})}
		</>
	);
};
