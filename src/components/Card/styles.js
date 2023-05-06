import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    padding: 10px 30px;
    width: 30%;

    @media (max-width: 750px) {
        width: 20%;

        p {
            font-size: 12px;
        }

        span {
            font-size: 20px;
        }

        svg {
            display: none
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin: 20px 0px;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 17px;
`;

export const Total = styled.span`
    font-size: 25px;
    font-weight: bold;
    text-align: start;
`;