import { IconAvatar } from "../Icons"
import { ModalLogin } from "../ModalLogin"
import { ModalRegister } from "../ModalRegister"
import { TransparentButton } from "../TransparentButton"
import { Container, StyledHeader, List, ListItem } from "./styles"

export const Header = () => {

    const onAskForLogout = () => {
        console.log('logout')
    }

    return (<StyledHeader>
        <Container>
            <List>
                <ListItem>
                    <ModalRegister />
                </ListItem>
                <ListItem>
                    <ModalLogin />
                </ListItem>
                <ListItem>
                    Joana da Silva Oliveira
                </ListItem>
                <ListItem>
                    <IconAvatar />
                </ListItem>
                <ListItem>
                    <TransparentButton onClick={onAskForLogout}>
                        Logout
                    </TransparentButton>
                </ListItem>
            </List>
        </Container>
    </StyledHeader>)
}