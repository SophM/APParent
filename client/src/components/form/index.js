import React from "react"

export function FormContainer({ children }) {
    return (
        <div className="row mt-5 mb-3">
            <div className="col-md-6 m-auto">
                <div className="card card-body">
                    {children}
                </div>
            </div>
        </div>
    )
};

export function FormTitle(props) {
    return (
        <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i> {props.title}</h1>
    )
};

export function FormAction(props) {
    return (
        <form action={props.route} method="POST">
            {props.children}
        </form>
    )
}

export function FormLabel(props) {
    return (
        <div className="form-group text-left">
            <label for={props.for}>{props.for}</label>
            <input type={props.for} id={props.for} name={props.for} className="form-control" placeholder={"Enter a " + props.for} />
        </div>
    )
}

export function InputText(props) {
    return (
        <div className="form-group text-left">
            <label for={props.for}>{props.for}</label>
            <textarea id={props.for} name={props.for} className="form-control" rows="4" placeholder={"Enter your " + props.for}></textarea>
        </div>
    )
}

export function Dropdown(props){
    return (
        <div className="form-group text-left">
            <label for={props.for}>{props.label}</label>
            <select class="form-control" id={props.for}>
                {props.children}
            </select>
        </div>
    )
}

export function OptionForDropdown(props) {
    return (
        <option>{props.option}</option>
    )
}

export function FormButton(props) {
    return (
        <button type="submit" className="btn btn-primary btn-block">{props.nameButton}</button>
    )
}

export function FormMessage(props) {
    return (
        <p className="lead mt-4">
            {props.message} <a href={props.path}>{props.action}</a>
        </p>
    )
}


