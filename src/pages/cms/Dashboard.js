import React,{useEffect} from 'react'
import HeaderCms from './HeaderCms'
import Welcome from './Welcome'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getMe } from './features/AuthSlice'

const Dashboard = () => {
  const dispatch =useDispatch();
  const history = useHistory();
  const {isError} = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      history.push('/auth')
    }
  }, [isError, history]);

  return (
    <div>
        <HeaderCms/>
        <Welcome/>
    </div>
  )
}

export default Dashboard