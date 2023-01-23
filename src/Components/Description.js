import '../Styles/Description.css';

const Description = (props) => {
    return (
        <div className='Description'>
            <div className='Description1'>
                <h3>{props.productData.name}</h3>
                <span className="Rating">{props.productData.Rating}★</span>
            </div>
            <div className='Description2'>{props.productData.description}</div>
        </div>
    )
}

export default Description