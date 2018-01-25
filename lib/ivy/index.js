import { updateElement, h } from './component'

const a = (
    <ul>
        <li>item 1</li>
        <li>item 2</li>
    </ul>
)

const b = (
    <ul className="fuck">
        <li>item 1</li>
        <li>hello!</li>
        <li><input type="checkbox" checked={false} /></li>
    </ul>
)

const $root = document.getElementById('root')
const $reload = document.getElementById('reload')

updateElement($root, a)
$reload.addEventListener('click', () => {
    updateElement($root, b, a)
})
