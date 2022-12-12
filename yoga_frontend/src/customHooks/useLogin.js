import  {useMutation} from 'react-query'
import axios from 'axios'
export default function useLogin(){
    const headers = {
        'Content-Type': 'application/json',
      }
    function queryAPI(body){
        console.log(body)
        return fetch("/login",{body,method: 'post', headers}).then(res=>res.text())
    }
    
    const {mutate:login , isError, isLoading,isSuccess} = useMutation(queryAPI);
    
    return {
        login,
        isError,
        isLoading,
        isSuccess
    }
}
