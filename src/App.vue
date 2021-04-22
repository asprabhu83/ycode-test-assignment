<template>
  <main class="h-screen w-screen overflow-hidden bg-white flex flex-col">
    <NavBar />

    <section class="relative flex flex-1 flex-row overflow-hidden">
    <Layers />
      <section
        class="w-full h-full relative z-10 scrollbar text-center text-none overflow-auto"
      >
        <button @click="createLayer" >Add Layer</button>
        <div v-for="(layer, layerIndex) in Layers" v-bind:key="layerIndex" class="text-center p-3">
         <span class="inline-flex items-center p-2 left" v-show="!layer.editable" @click="focusLayer(layer)" :class="layer.focusable?'border border-blue-300':''"> {{layer.textLayer}}
         &nbsp; <icon name="ycode-edit" colorIcon="blue" size="10" class="relative -top-7 right-3 cursor-pointer bg-blue-300 p-1"  v-show="layer.focusable" @click="editLayer(layer)"/> <icon name="ycode-trash" colorIcon="blue" size="10" class="relative -top-7 right-1 cursor-pointer  bg-blue-300 p-1" v-show="layer.focusable" @click="deleteLayer(layerIndex)"/> </span>
         <input v-model="layer.textLayer" autocomplete="off" v-show="layer.editable" :id="'textLayer'+layerIndex" type="text" class="border p-3" @focus="focusLayer(layer)" @blur="blurLayer(layer)">
        </div>
        </section>

      <Design />
    </section>
  </main>
</template>

<script>
import Design from "./components/Design.vue";
import Layers from "./components/Layers.vue";
import NavBar from "./components/NavBar.vue";
import Icon from "./components/Icon.vue";
export default {
  name: "App",
  components: {
    Design,
    NavBar,
    Layers,
    Icon
  },

  methods: {
    createLayer() {
      var layerCount = this.$store.state.Layers.length + 1
      this.$store.commit('addLayers', {
        "layerName":"Layer"+ layerCount,
        "textLayer": "Text Layer" + layerCount,
        "editable": false,
        "focusable": false,
      });
    },
    focusLayer(layer){
      this.Layers.forEach(l=>{
        if(l.layerName === layer.layerName)
          l.focusable = true
        else 
          l.focusable = false
      })
      
    },
    editLayer(layer){
      layer.editable = true
      layer.focusable = false
    },
    deleteLayer(layerIndex){
     this.Layers.splice(layerIndex, 1)
    },
    blurLayer(layer) {
      layer.editable = false
       layer.focusable = false
    }
  },
  computed: {
    Layers() {
      return this.$store.state.Layers
    }
  }
};
</script>
