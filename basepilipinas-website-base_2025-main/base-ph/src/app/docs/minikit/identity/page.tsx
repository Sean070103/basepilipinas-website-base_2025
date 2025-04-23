export default function IdentityAndSocialPage() {
  const profileCode = `import { useProfile, ProfileProvider } from '@minikit/identity';

function Profile() {
  const { profile, updateProfile } = useProfile();

  return (
    <div>
      <img src={profile.avatar} alt={profile.username} />
      <h2>{profile.username}</h2>
      <p>{profile.bio}</p>
      <button onClick={() => updateProfile({
        bio: "Building on Base"
      })}>
        Update Bio
      </button>
    </div>
  );
}`;

  const socialGraphCode = `import { useSocialGraph } from '@minikit/social';

function SocialConnections() {
  const {
    followers,
    following,
    follow,
    unfollow,
    isFollowing
  } = useSocialGraph();

  return (
    <div>
      <div>
        <h3>Followers ({followers.length})</h3>
        {followers.map((user: { id: string; username: string }) => (
          <div key={user.id}>
            {user.username}
            {!isFollowing(user.id) && (
              <button onClick={() => follow(user.id)}>
                Follow Back
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}`;

  const verificationCode = `import { useVerification } from '@minikit/identity';

interface VerificationBadgeProps {
  userId: string;
}

function VerificationBadge({ userId }: VerificationBadgeProps) {
  const { isVerified, verify } = useVerification(userId);

  if (isVerified) {
    return <span className="verified-badge">✓</span>;
  }

  return (
    <button onClick={() => verify()}>
      Verify Account
    </button>
  );
}`;

  const activityFeedCode = `import { useActivityFeed } from '@minikit/social';

interface Activity {
  id: string;
  type: 'post' | 'follow';
  content?: string;
  user: {
    avatar: string;
    username: string;
  };
  target?: {
    username: string;
  };
}

function ActivityFeed() {
  const { activities, loadMore } = useActivityFeed<Activity>();

  return (
    <div className="feed">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-item">
          <img src={activity.user.avatar} alt={activity.user.username} />
          <div>
            <strong>{activity.user.username}</strong>
            {activity.type === 'post' && activity.content && (
              <p>{activity.content}</p>
            )}
            {activity.type === 'follow' && activity.target && (
              <p>followed {activity.target.username}</p>
            )}
          </div>
        </div>
      ))}
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}`;

  return (
    <div className="space-y-8 max-sm:max-w-[330px]">
      <div>
        <h1 className="text-4xl font-bold mb-4">Identity & Social Features</h1>
        <p className="text-lg text-white/70 mb-8">
          Add powerful identity and social features to your Base application
          using MiniKit. Implement user profiles, social connections,
          verifications, and activity feeds.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">User Profiles</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Profile Management</h3>
          <p className="text-white/70 mb-4">
            Implement user profiles with customizable fields and avatar support:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>{profileCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Social Graph</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Social Connections</h3>
          <p className="text-white/70 mb-4">
            Add follow/unfollow functionality and manage social connections:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>{socialGraphCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Verification System</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Account Verification</h3>
          <p className="text-white/70 mb-4">
            Implement account verification and display verification badges:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>{verificationCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Activity Feed</h2>
        <div className="bg-white/5 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-3">Social Activity</h3>
          <p className="text-white/70 mb-4">
            Display user activities and social interactions:
          </p>
          <div className="mt-4 bg-black/30 rounded p-4">
            <pre className="text-sm overflow-x-scroll">
              <code>{activityFeedCode}</code>
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Privacy & Security</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper data encryption
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Use secure authentication methods
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Follow GDPR compliance guidelines
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-medium mb-3">Performance</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Implement proper caching strategies
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Use pagination for large datasets
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2"></div>
                <span className="text-white/70">
                  Optimize image loading and storage
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
