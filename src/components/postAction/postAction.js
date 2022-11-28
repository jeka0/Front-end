import React, {useState} from 'react';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import './postAction.css';

function Action(props) {
    const [like, setLike] = useState(false);

    const onLike = ()=>{
        setLike(!like);
    }

    return (
        <div className='action'>
            <div className='like'>
                {like? <Favorite style={{ color: 'red', fontSize: 28 }} onClick={onLike} />: <FavoriteBorder style={{ fontSize: 28 }} onClick={onLike} />}
            </div>
        </div>
    );
  }
  
  export default Action;