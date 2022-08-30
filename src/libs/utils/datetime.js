import { formatDistance } from 'date-fns'

export const formatTimeDiff = (dateTime) => {
  return formatDistance(new Date(dateTime), new Date(), {
    addSuffix: true
  })
}
