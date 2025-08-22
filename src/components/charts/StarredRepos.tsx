import React from 'react'
import { calculateMostStarredRepos } from '@/utils'
import type { Repository } from '@/types'

function StarredRepos({repositories}:{repositories:Repository[]}) {
    const mostStarredRepos = calculateMostStarredRepos(repositories);
    console.log(mostStarredRepos)
  return (
    <div>
      
    </div>
  )
}

export default StarredRepos
