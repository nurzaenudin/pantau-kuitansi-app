import { APISetting } from './config.js';
export default{
    getAll(){
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
        return fetch (APISetting.baseURL + 'perintahbayar/' + id,{
            method:'DELETE',
            headers: APISetting.headers
        })
        .then(()=>this.status='Delete Successfull')
        .then(()=>console.log('hapus Perintah Bayar ID'+ id));
    }
}
