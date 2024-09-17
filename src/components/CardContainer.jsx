export default function CardContainer({titulo, children}) {
    return(
        <>
        <h1>{titulo}</h1>
        <div className="flex">
            {children}
        </div>
        </>
    )
}