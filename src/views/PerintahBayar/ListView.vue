<script setup>
import{ref, onMounted, reactive} from 'vue'
import PerintahBayarAPI from '../../API/PerintahBayar.js'

const perintahbayarsDTO=ref([]);
const getPerintahBayarsDTO=async()=>{
  perintahbayarsDTO.value=await PerintahBayarAPI.getAll();
};

  

function tesKlik(){
  console.log('ini tes klik');
}

function hapusPerintahBayar(id,index){
  PerintahBayarAPI.delete(id);
  console.log("ini dari hapus " + perintahbayarsDTO);
  this.$delete(this.perintahbayarsDTO.content,index)
}

 
onMounted(()=>{
  console.log('ini habis mounted');
  getPerintahBayarsDTO();

})











</script>

<template>
    <div class="perintahbayardiv">
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
        
<tr v-for="(perintahbayar,index) in perintahbayarsDTO.content" v-bind:key="perintahbayar.id">
    <td> {{perintahbayar.hargaSatuan}}</td>
    <td> {{perintahbayar.keterangan}}</td>
    <td> {{perintahbayar.namaPic}}</td>
    <td> {{perintahbayar.namaRekanan}}</td>
    <td> {{perintahbayar.status}}</td>
    <td> Edit <button @click="hapusPerintahBayar(perintahbayar.id, index)">Hapus</button></td>
</tr>
      </table>
    </div>

  
  </template>
  
  <style>

  </style>