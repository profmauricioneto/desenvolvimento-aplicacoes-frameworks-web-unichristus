import Card from "./Card"

const UsandoChildren = () => {
    return(
        <main>
            <Card>
                <h2>Titulo do Card</h2>
                <p>Conteúdo do Card</p>
            </Card>

            <Card>
                <button className="p-2 border-blue-700">Clique Aqui!</button>
            </Card>
        </main>
    )
}

export default UsandoChildren;