export default function RuleItem({ok, text}){
    return (
        <li className="rule">
            <span className={`dot ${ok? "ok":"no"}`}></span>
            <span>{text}</span>
        </li>
    )
}