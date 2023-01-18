import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"

import { useForm } from "../../hooks/UseForm"
import { HeroCard } from "../components"
import { getHeroByName } from "../helpers"
import { useMemo } from "react"


export const SearchHero = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse( location.search)

    const heroes = useMemo( ()=> getHeroByName( q ), [ q ]) 


    const { searchText, onInputChange }=useForm({
        searchText: q
    })

    const onSeachSubmit = (event)=>{
        event.preventDefault()
        if(searchText.trim().length <=1 ) return;
        
        navigate(`?q=${ searchText }`)
    }
    
    const showSearch = (q.length === 0)
    const showError = (q.length > 0 ) && ( heroes.length === 0)


    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                    <h4>Search</h4>
                    <hr/>

                    <form onSubmit={ onSeachSubmit }>
                        <input
                            type="text"
                            placeholder='Search Hero'
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />
                        
                        <button
                            className="btn btn-dark mt-2"
                        >
                            Search
                        </button>
                        
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    
                
                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ?'':'none'}}>
                        Search a Hero
                    </div>
                    
                    <div className="alert alert-danger animate__animated animate__shakeX" style={{ display:showError?'':'none'}}>
                        No Hero with <b>{ q }</b>
                    </div>


                    {
                        heroes.map( hero => <HeroCard key={hero.id} {...hero} />)
                    }

                </div>
            </div>



        </>
    )
}
