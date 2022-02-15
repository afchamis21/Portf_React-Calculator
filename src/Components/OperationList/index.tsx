import { Container } from "./styles";

interface OperationListProps{
  history: string[]
}

export function OperationList(props: OperationListProps){
  return(
    <Container>
      <li>
        {props.history.map((item, index) => 
        <ul key={index}>{item}<hr /></ul>
        )}
        
      </li>
      
    </Container>
  )
}