import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const APP_CONTAINER_SIZE = 800;
const APP_CONTAINER_MIN_SIZE = 300;

export const AppContainer = styled.div`
    margin: auto;
    display: block;
    width: 100%;
    max-width: ${APP_CONTAINER_SIZE}px;
    min-width: ${APP_CONTAINER_MIN_SIZE}px;
    padding: 0.5rem;
`;

export const PageContainer = styled.div`
    display: block;
    width: 100%;
    padding: 0.5rem;
`;

export const StyledNavLink = ({to, children}) => {
    return (
        <Link to={to}>
            <Button color="danger" style={{
                width: '100%',
                border: '1px white solid',
            }}>
                {children}
            </Button>
        </Link>
    );
};