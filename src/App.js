import { useState } from 'react'
import Card from './componets/Card.js'
import Container from './componets/Container.js'
import UserForm from './components/UserForm.js'

function App() {
    const [usuarios, setUsuarios] = useState([])

    const submit = usuario => {
        setUsuarios([
            ...usuarios,
            usuario,
        ])
    }
    return (
        <div style={{ marginTop: '15%' }}>
            <Container>
                <Card>
                    <div style={{ padding: 20 }}>
                        <UserForm submit={submit} />
                    </div >
                    <Card>
                        <ul>
                            {usuarios.map(x =>
                                <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`} </li>
                            )}
                        </ul>
                    </Card>
                </Card>
            </Container >
        </div>
    )
}

export default App
