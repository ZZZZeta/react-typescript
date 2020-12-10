import * as actions from '../../redux/preloader/actions';
import { useDispatch } from 'react-redux';

const usePreloader = () => {
  const dispatch = useDispatch();

  return [
    () => dispatch(actions.enableLoading()),
    () => dispatch(actions.disableLoading()),
  ];
};

export default usePreloader;
