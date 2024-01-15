import './SkeletonInstagram.scss';
import { Skeleton } from '../Skeleton/Skeleton';


export const SkeletonInstagram = () => {

  return (
    <li className='skeleton-instagram'>

      <Skeleton height='100%' borderRadius='10px' />

      <div className='skeleton-instagram__btn-wrapper'>
          <Skeleton height='100%' circle={true} />
      </div>

    </li>
  )
}