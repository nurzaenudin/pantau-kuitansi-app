<script setup>
import{ref, onMounted, reactive} from 'vue'
import PerintahBayarAPI from '../../API/PerintahBayar.js'

//reactive state
//const perintahbayars=ref([]);


const perintahbayarsDTO=ref({});
//const perintahbayars=ref({});
const getPerintahBayarsDTO=async()=>{
  perintahbayarsDTO.value=await PerintahBayarAPI.getAll();
};
//const perintahbayars=ref();
//const getPerintahBayars=async()=>{
//  getPerintahBayarsDTO();
//  perintahbayars.value=await perintahbayarsDTO.content;
//}
const perintahbayarsTemp=ref();
const perintahbayars=ref();
function getPerintahBayars(){
  perintahbayarsTemp.value=PerintahBayarAPI.getAll();
  perintahbayars.value=perintahbayarsTemp.content;
  console.log(perintahbayars)

}
  

function tesKlik(){
  console.log('ini tes klik');
}

function hapusPerintahBayar(id){
  PerintahBayarAPI.delete(id);
  console.log("ini dari hapus" + perintahbayarsDTO);
}

 

getPerintahBayarsDTO();
getPerintahBayars();









</script>

<template>
    <div class="perintahbayar">
      <h1>Ini adalah perintah bayar</h1>
      <RouterLink to="/perintahbayar/form">Tambah Perintah Bayar</RouterLink>
      <!-- <button router to="/kuitansi/form">
      Tambah Kuitansi
    </button> -->
    <RouterView></RouterView>
      <table border="1">
        <tr>
            <th>Harga Satuan</th>
            <th>Keterangan</th>
            <th>Nama PIC</th>
            <th>Nama Rekanan</th>
            <th>Status</th>
            <th>Aksi</th>
        </tr>
        
<tr v-for="perintahbayar in perintahbayarsDTO.content" v-bind:key="perintahbayar.id">
    <td> {{perintahbayar.hargaSatuan}}</td>
    <td> {{perintahbayar.keterangan}}</td>
    <td> {{perintahbayar.namaPic}}</td>
    <td> {{perintahbayar.namaRekanan}}</td>
    <td> {{perintahbayar.status}}</td>
    <td> Edit <button @click="hapusPerintahBayar(perintahbayar.id)">Hapus</button></td>
</tr>
      </table>
    </div>

    Perintah Bayar DTO : {{perintahbayarsDTO}}
    Perintah Bayar : {{ perintahbayars }}
    <button @click="tesKlik">Tes Klik</button>

  
  </template>
  
  <style>

  </style>