function Preloader() {
    return (
        <div className="preloader">
            <svg 
                className="loader" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 340 340"
            >
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="loader-text">
                    {`{ SO }`}
                </text>
            </svg>
        </div>
    )
}

export default Preloader