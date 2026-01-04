export default function Card({title, children}){
    return (
        <section className="card">
            <h2 className="cardTitle">
                {title}
            </h2>
            <div>
                {children}
            </div>
        </section>
    )
}