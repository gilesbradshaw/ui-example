import { useState} from 'react'

export default 
  <T,Y>(
    def: T,
    fn: (def: T, set: (set: T) => void) => Y,
  ) => {
  return fn(
    ...useState<T>(
      def,
    ),
  )
}
