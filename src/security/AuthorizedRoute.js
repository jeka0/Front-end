import { useAuth } from '../auth/useAuth.js';

function AuthorizedRoute({ children }) {
  const { isAuth } = useAuth();

    if(isAuth) return children;
  }
  
  export default AuthorizedRoute;