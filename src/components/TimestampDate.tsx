type Props = {
  timestamp: string
  title?: boolean
  time?: boolean
}

export default function TimestampDate({ timestamp, title, time }: Props) {
  return (
    <time dateTime={timestamp}>
      {new Date(
        timestamp
      ).toLocaleDateString('en-us', {
        year: 'numeric',
        month: title ? 'short' : 'long',
        day: 'numeric'
      })}{' '}
      {time && (
        new Date(timestamp).toLocaleTimeString('en-us', {
          hour: 'numeric',
          minute: 'numeric'
        })
      )}
    </time>

  )
}
