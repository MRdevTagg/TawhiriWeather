/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainSection = styled.section`
display: flex;
justify-content: space-between;
overflow: hidden;
padding: 1.2rem 0 0;
gap: 1rem;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
    }
`;
