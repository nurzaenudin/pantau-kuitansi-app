<script setup>
import{ref, onMounted} from 'vue'
import PerintahBayarAPI from '../../API/PerintahBayar.js'

//reactive state
//const perintahbayars=ref([]);

const perintahbayars=ref({});
const getPerintahBayars=async()=>{
  perintahbayars.value=await PerintahBayarAPI.index();

};

console.log('ini udin ya');
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
        
<tr v-for="perintahbayar in perintahbayars.content">
    <td> {{perintahbayar.hargaSatuan}}</td>
    <td> {{perintahbayar.keterangan}}</td>
    <td> {{perintahbayar.namaPic}}</td>
    <td> {{perintahbayar.namaRekanan}}</td>
    <td> {{perintahbayar.status}}</td>
    <td> Edit <RouterLink to="/perintahbayar/form">Hapus {{PerintahBayarAPI}}</RouterLink> {{perintahbayar.id}}</td>
</tr>
<tr>
    <td> isi 1</td>
    <td> isi 2</td>
    <td> isi 3</td>
    <td> Edit Hapus</td>
</tr>
      </table>
    </div>

    SPBYS: {{perintahbayars}}

  
  </template>
  
  <style>

  </style>