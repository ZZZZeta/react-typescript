import { ReactChildren, useEffect } from 'react';
import { isLoggedInSelector } from '../../../redux/auth/selectors';
import { isLoadingSelector } from '../../../redux/user/selectors';
import { getCurrentUser } from '../../../redux/user/actions';
import { useSelector, useDispatch } from 'react-redux';

type AuthProps = {
  children: ReactChildren;
};

function Auth({ children }: AuthProps) {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(isLoggedInSelector);
  const isUserLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [isUserLoggedIn, dispatch]);

  return isUserLoading ? null : children;
}

export default Auth;
