import { Container } from './styles'

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Xbox 360</td>
                        <td className="deposit">R$1.200,00</td>
                        <td>Venda</td>
                        <td>20/04/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.200,00</td>
                        <td>Apartamento</td>
                        <td>12/04/2022</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}