import app from "./app";
// repare que não precisamos importar o express aqui
function main() {
    app.listen(3000, 'localhost', () => {
        console.log('Servidor rodando na porta 30000')
    })
}

main()