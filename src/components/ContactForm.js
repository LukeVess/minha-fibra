import { Container } from "./ContactForm.styles"
import {Button} from "./button/button"

const ContactForm = () => {
    return (
        <Container>
            <input placeholder="name" />
            <Button primary>Enviar</Button>
        </Container>
    )
}

export default ContactForm;