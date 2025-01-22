import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center gap-4">
        <Link to="/hotcoin/market">market</Link>
        <Link to="/hotcoin/wealthManagement">wealthManagement</Link>
      </div>
    </>
  )
}

export default Home
