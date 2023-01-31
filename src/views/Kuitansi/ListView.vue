<script setup>
import{ref, onMounted} from 'vue'

//reactive state
const kuitansis=ref([
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
</script>

<template>
    <div class="kuitansi">
      <h1>Ini adalah kuitansi</h1>
      <RouterLink to="/kuitansi/form">Kuitansi</RouterLink>
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
        
<tr v-for="kuitansi in kuitansis">
    <td> {{kuitansi.judul1}}</td>
    <td> {{kuitansi.judul2}}</td>
    <td> {{kuitansi.judul3}}</td>
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
  </template>
  
  <style>

  </style>