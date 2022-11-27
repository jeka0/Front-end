import { useAuth } from '../auth/useAuth.js';

function UnauthorizedRoute({ children }) {
  const { isAuth } = useAuth();

    if(!isAuth) return children;
  }
  
  export default UnauthorizedRoute;