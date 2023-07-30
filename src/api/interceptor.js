import Axios from 'axios';
import { API } from '.';
import { ShowErrorMessage } from '../component';
import dispatchType from '../redux/constants';
import { API_KEY } from '../assects/strings';


const interceptor = (store) => {
  Axios.interceptors.request.use(
    (conf) => {
      // conf.headers['Authorization'] = 'Bearer ' + store?.getState()?.userDetails?.user?.token?.token;
      conf.params['apikey'] =  API_KEY;

      return conf;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  Axios.interceptors.response.use(
    (next) => {
      return Promise.resolve(next);
    },
    (error) => {
      if (error.response.status == 401) {
        ShowErrorMessage("Unauthorized/Expired Access")
        store.dispatch({
          type: dispatchType.LOGOUT_USER,
          payload: null,
        });
      }
      else {
      console.log("Interceptor Error",error.response)
        // ShowErrorMessage("Something went wrong")
        console.log("Something went wrong Interceptor")
      }

    
      return Promise.reject(error);
    }
  );
};
export default {
  interceptor,
};