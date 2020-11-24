import { enableLoading, disableLoading } from '../../redux/preloader/actions';
import { useDispatch } from 'react-redux';

const usePreloader = () => {
  const dispatch = useDispatch();

  return [() => dispatch(enableLoading()), () => dispatch(disableLoading())];
};

export default usePreloader;
