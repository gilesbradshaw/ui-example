import { RouteComponentProps } from 'react-router'


const selected: (
  at?: string | false,
  on?: string | false,
  off?: string | false,
) =>
  (props: RouteComponentProps & { path: string }) =>
    string | false
  = (at, on, off) =>
    ({ location, match, path = match.path }) => {
      return (
        location.pathname === path.replace('//', '/')
          && at
      ) || (
        location.pathname.startsWith(path.replace('//', '/'))
          && on  
      ) || (
        !location.pathname.startsWith(path.replace('//', '/'))
          && off  
      ) || false
    }
export default selected
