export default function ContainerMovies({titulo, children}){

    return(
        <div className="my-10">
            <h2 className="text-3xl font-bold mb-5">{titulo}</h2>
            <section className="flex gap-5 justify-around">
                {children}
            </section>
        </div>
    )

}