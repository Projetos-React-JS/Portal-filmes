export default function CardContainer({ titulo, children }) {
    return(
        <div className="flex flex-col justify-center text-center mt-6">
        <h1 className="text-3xl font-bold mb-5">{titulo}</h1>
        <div className="flex flex-wrap justify-around gap-4">
            {children}
        </div>
        </div>
    )
}