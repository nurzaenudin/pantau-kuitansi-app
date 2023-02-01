<script setup>
import{ref, onMounted} from 'vue'
import PerintahBayarAPI from '../../API/PerintahBayar.js'

//reactive state
const perintahbayars=ref([
  {
    judul1: 'isi 77711',
    judul2: 'isi 77721',
    judul3: 'isi 77731'
  },
  {
    judul1: 'isi 77712',
    judul2: 'isi 77722',
    judul3: 'isi 77732'
  }
  ])

const spbys=ref({});
const getSpbys=async()=>{
  spbys.value=await PerintahBayarAPI.index();

};

console.log('ini udin ya');
getSpbys();



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
            <th>judul 1</th>
            <th>judul 2</th>
            <th>judul 3</th>
            <th>Aksi</th>
        </tr>
        
<tr v-for="perintahbayar in perintahbayars">
    <td> {{perintahbayar.judul1}}</td>
    <td> {{perintahbayar.judul2}}</td>
    <td> {{perintahbayar.judul3}}</td>
    <td> Edit Hapus</td>
</tr>
<tr>
    <td> isi 1</td>
    <td> isi 2</td>
    <td> isi 3</td>
    <td> Edit Hapus</td>
</tr>
      </table>
    </div>

    SPBYS: {{spbys.content}}

  
  </template>
  
  <style>

  </style>