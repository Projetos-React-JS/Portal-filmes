export default function CardContainer({ titulo, children }) {
    return(
        <div className="my-10">
        <h1 className="text-3xl font-bold mb-5">{titulo}</h1>
        <div className="flex gap-5 justify-around">
            {children}
        </div>
        </div>
    )
}