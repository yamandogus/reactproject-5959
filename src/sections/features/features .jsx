import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../../Styles/style.scss"


export function Features(props){
    const {icon,className,iconMore, moviesName,description} =props
    return(
        <div className={className}>
            <div className="card h-100 mb-5">
                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div className={iconMore}>
                        <i className={`bi bi-${icon}`}></i>
                    </div>
                        <h4>{moviesName}</h4>
                        <p className="mb-0">
                        {description}
                        </p>
                </div>
            </div>
        </div>
    )
}

