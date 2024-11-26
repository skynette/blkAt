import { Button } from '@/components/ui/button'

const suggestedUsers = [
  { name: 'Temidayo Folajin', avatar: '/placeholder.svg', mutualConnections: 5 },
  { name: 'John Doe', avatar: '/placeholder.svg', mutualConnections: 3 },
  { name: 'Sherifdeen Kujat', avatar: '/placeholder.svg', mutualConnections: 2 },
]

export function SuggestedConnections() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Suggested Connections</h2>
      <div className="space-y-4">
        {suggestedUsers.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.mutualConnections} mutual connections</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Connect</Button>
          </div>
        ))}
      </div>
      <Button variant="link" className="mt-4 w-full">See all</Button>
    </div>
  )
}

