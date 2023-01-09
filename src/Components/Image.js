import './Image.css';

function Image(props) {
  return (
    <div >
      <img className='Image' src={props.imge} />
    </div>
  )
}
export default Image
