import './Skeleton.scss';


export const Skeleton = ({ circle = false, height = '20px', borderRadius = '2px' }) => {

  return (
    <div 
      className='skeleton'
      style={{ height: height, borderRadius: (circle) ? '50%' : borderRadius }}
    >
      <div className='skeleton__bg'></div>
    </div>
  )
}