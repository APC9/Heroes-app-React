import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPages, Hero, MarvelPages, SearchHero} from "../pages"


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container'>

                <Routes>
                    <Route path="marvel" element={<MarvelPages />} />
                    <Route path="dc" element={<DcPages />} />

                    <Route path="hero/:id" element={<Hero />} />
                    <Route path="search" element={<SearchHero />} />

                    <Route path="/" element={<Navigate to='/marvel' />} />

                </Routes>

            </div>

        </>
    )
}
