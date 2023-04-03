import React, {useState} from 'react'
import SearchForm from '../Components/SearchForm'
import Loading from '../Components/Loading'
import Recipes from '../Components/Recipes'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hits, setHits] = useState([]);

    return (
        <main>
            <SearchForm setLoading={setLoading} setError={setError} setHits={setHits} />
            {loading ? <Loading loading={loading} /> : <Recipes hits={hits}  />}
        </main>
    )
}

export default Home
