import HomeSection from './../src/components/Home/HomeSection'
import Categories from './../src/components/Home/CategorieSection'
import Popular from './../src/components/Home/PopularCategory'

const Home = ()=>{
    return (
        <>
          <HomeSection/>
          <Categories/>
          <Popular/>
        </>
    )
}

export default Home
