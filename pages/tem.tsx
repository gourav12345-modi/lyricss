import Link from 'next/link'
function tem() {
  return (
    <div>
      Hello my first next js page 
      Read{' '}
    <Link href="/">
      <a>this page!</a>
    </Link>
    </div>
  )
}

export default tem
