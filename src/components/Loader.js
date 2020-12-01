import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetch Data....</h1>
        </div>
    )
}

export default Loader
