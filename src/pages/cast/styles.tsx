import styled from "styled-components";

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const CastList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;
`

export const CastItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: w400;
        font-size: 100%;
        text-align: center;
    }

    a:hover {
        transform: scale(1.1);
    }

    a {
        transition: all 0.3s;
    }
`
