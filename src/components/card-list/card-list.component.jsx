import './card-list.styles.css'
import CardComponent from "./card/card.component";

const CardListComponent = (props) => {
    const { people } = props;
    return (
        <div className='card-list'>
            {
                people.map((person) =>{
                    const { id, name, email } = person;
                    return <CardComponent
                        key={id}
                        id={id}
                        name={name}
                        email={email}
                    />
                })
            }
        </div>
    )
}

export default CardListComponent;
