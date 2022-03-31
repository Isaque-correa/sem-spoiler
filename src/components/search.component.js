
function Search({search, valueState, change}){
    
    return(
        <>
        <form className="search-form" onSubmit={search}>
            <input type="search" placeholder="Buscar..." value={valueState} onChange={change}/>
        </form>
        
        </>
        
    )
}

export default Search;