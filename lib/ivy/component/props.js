const setBooleanProp = ($target, name, value) => {
    if (value) {
        $target.setAttribute(name, value)
        $target[name] = true
    } else {
        $target[name] = false
    }
}

const setProp = ($target, name, value) => {
    if (typeof value === 'boolean') {
        setBooleanProp($target, name, value);
    } else {
        $target.setAttribute(name, value);
    }
}

export const updateProps = ($target, props) => {
    if(!props) return
    // console.log(props)
    props.forEach((value, name) => {
        console.log(name, value)
        setProp($target, name, value)
    })
}