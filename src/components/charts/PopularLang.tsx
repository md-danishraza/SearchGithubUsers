import type { Repository } from '@/types'
import { calculatePopularLanguages } from '@/utils'

function PopularLang({repositories}:{repositories:Repository[]}) {
    const usedLang = calculatePopularLanguages(repositories)
    
  return (
    <div>
      
    </div>
  )
}

export default PopularLang
