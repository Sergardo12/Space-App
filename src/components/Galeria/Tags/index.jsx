import styled from "styled-components"
import tags from "./tags.json"


const Boton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;

    }
`
const TagDivision = styled.section`
    display: flex;
    align-items: center;
    margin-top: 56px ;
    gap: 64px;

`

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;

`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;

`
const Tag = () => {
    return <>
    <TagDivision>
        <TagTitulo>Buscar por tags:</TagTitulo> 
        <Div>
            {tags.map((tag)=> <Boton key={tag.id}>{tag.titulo}</Boton>)}
        </Div> 
        
    </TagDivision>
      
    </>
}

export default Tag;