import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../actions'

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels
    // staleTime: 1000 * 60 * 60, // 1hora fresh
    // placeholderData: [
    //   {
    //     id: 791921801,
    //     node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
    //     name: '❤️',
    //     color: 'ffffff',
    //     default: false,
    //     description: null
    //   } satisfies GitHubLabel,
    //   {
    //     id: 69105383,
    //     node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
    //     name: 'Browser: IE',
    //     color: 'c7def8',
    //     default: false,
    //     description: null
    //   }
    // ],
    // initialData: [
    //   {
    //     id: 791921801,
    //     node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
    //     name: '❤️',
    //     color: 'ffffff',
    //     default: false,
    //     description: null
    //   } satisfies GitHubLabel,
    //   {
    //     id: 69105383,
    //     node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
    //     name: 'Browser: IE',
    //     color: 'c7def8',
    //     default: false,
    //     description: null
    //   }
    // ]
  })
  return {
    labelsQuery
  }
}
