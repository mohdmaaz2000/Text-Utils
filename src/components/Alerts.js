import React from 'react'

export default function Alerts(props) {
    return (
        props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
            {props.alert.msg}
        </div>
    )
}
