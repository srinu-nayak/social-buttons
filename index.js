const Button = props => {
  const {text, classname} = props
  return <button className={`button ${classname}`}>{text}</button>
}

const element = (
  <div className='social-button-container'>
    <h1 className='social-button-heading'>Social Buttons</h1>
    <div>
      <Button text='Like' classname='like-button' />
      <Button text='Comment' classname='comment-button' />
      <Button text='Share' classname='share-button' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
