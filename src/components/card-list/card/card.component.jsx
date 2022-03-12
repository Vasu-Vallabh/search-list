import './card.styles.css'

const CardComponent = (props) => {
    const {id, name, email} = props;
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set5&size=180x180`} alt={`${name}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default CardComponent;
