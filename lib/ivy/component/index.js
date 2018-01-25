import { Map } from 'immutable'
import { updateProps } from './props'

export const Node = Map
export const h = (type, props, children) => {
    return Node({type, props: Map(props) || Map({}), children})
}

export const createElement = (node) => {
    if (typeof node === 'string') {
        return document.createTextNode(node)
    }
    
    const $element = document.createElement(node.get('type'))
    updateProps($element, node.get('props'))

    node.get('children')
    .map(createElement)
    .forEach($element.appendChild.bind($element))
    
    return $element
}

const nodeChanged = (node1, node2) => {
    return (
        typeof node1 !== typeof node2 ||
        typeof node1 === 'string' && node1 !== node2 ||
        !node1.equals(node2)
    ) 
}

export const updateElement = ($parent, newNode, oldNode, index = 0) => {
    if (!oldNode) {
        $parent.appendChild(
            createElement(newNode)
        )
    } else if (!newNode) {
        $parent.removeChild(
            $parent.childNodes[index]
        )
    } else if (nodeChanged(newNode, oldNode)) {
        $parent.replaceChild(
            createElement(newNode),
            $parent.childNodes[index]
        )
    } else if (newNode.type) {
        const newLength = newNode.get('children').length
        const oldLength = oldNode.get('children').length
        for (let i = 0; i < newLength || i < oldLength; i++) {
            updateElement(
                $parent.childNodes[index],
                newNode.get('children')[i],
                oldNode.get('children')[i],
                i
            )
        }
    }
}