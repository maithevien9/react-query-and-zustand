import { Link } from 'react-router-dom'

export function Component() {
  return (
    <Link to="/">
      <span>Back to Home</span>
    </Link>
  )
}
Component.displayName = 'NotFoundPage'
