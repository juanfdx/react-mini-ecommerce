import './Title.scss';


export const Title = ({ fontSize, isCentered, children }) => {

  const style = {
    fontSize: fontSize ? `${fontSize}px` : undefined,
    textAlign: isCentered ? `center` : undefined,
    // You can add more styles here if needed
  };

  return (
    <h2 className="title" style={style}>
      { children }
    </h2>
  )
}