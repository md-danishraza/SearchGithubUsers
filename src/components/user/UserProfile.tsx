
import { useQuery } from '@apollo/client/react';
import { GET_USER } from '@/queries';
import { type UserData } from '@/types';
import UserCard from './userCard';
import StatsContainer from './StatsContainer';
import ForkedRepos from '../charts/ForkedRepos';
import StarredRepos from '../charts/StarredRepos';
import PopularLang from '../charts/PopularLang';
import Loading from './Loading';
import CommitGraph from '../charts/CommitGraph';
type UserProfileProps = {
    userName: string;
  };
function UserProfile({userName}:UserProfileProps) {
  const { loading, error, data } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <Loading/>;
  if (error) return <h2 className='text-xl'>{error.message}</h2>;
  if (!data) return <h2 className='text-xl'>User Not Found.</h2>;

  const {
    avatarUrl,
    name,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div className=' dark:text-white! '>
      <div className="blob"></div>
      <UserCard avatarUrl={avatarUrl} name={name} bio={bio} url={url} />
      <StatsContainer
      totalRepos={repositories.totalCount}
      followers={followers.totalCount}
      following={following.totalCount}
      gists={gists.totalCount}
    />
    {
      repositories.totalCount >0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <ForkedRepos repositories={repositories.nodes}/>
        <StarredRepos repositories={repositories.nodes}/>
        <PopularLang repositories={repositories.nodes}/>
      </div>
      )
    }
    <CommitGraph username={userName}/>
    </div>
  );
}

export default UserProfile
