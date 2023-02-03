import { APISetting } from './config.js';
export default{
    index(){
        return fetch (APISetting.baseURL +'perintahbayar/all',{
            method:'GET',
            headers: APISetting.headers
        })
        .then(function(response){
            if(response.status !=200){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },
    delete(id){
        return fetch (APISetting.baseURL + 'perintahbayar/' + id)
    }
}
