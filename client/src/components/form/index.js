import React from "react"

export function formContainer({children}) {
    return (
        <div className="row mt-5">
            <div className="col-md-6 m-auto">
                <div className="card card-body">
                    {children}
                </div>
            </div>
        </div>
    )
};

export function formTitle(props) {
    return (
        <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i> {props.title}</h1>
    )
};

export function formLabel(props) {
    return (
        <div className="form-group">
            <label for={props.for}>{props.for}</label>
            <input type={props.for} id={props.for} name={props.for} className="form-control" placeholder={"Enter " + props.for}/>
        </div>
    )
}

export function formButton(props){
    return (
        <button type="submit" className="btn btn-primary btn-block">{props.nameButton}</button>
    )
}

export function formMessage(props){
    return (
        <p class="lead mt-4">
            {props.message} <a href={props.path}>{props.action}</a>
        </p>
    )
}


