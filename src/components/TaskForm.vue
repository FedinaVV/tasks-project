<template>
  <form class="task-form" @submit.prevent>
    <h2 class="task-heading">Создание новой задачи</h2>
    <my-input v-model="task.title" type="text" placeholder="Название задачи"/>
    <my-input v-model="task.body" type="text" placeholder="Описание задачи"/>
    <my-button class="task-btn__btn-form" @click="createTask">Создать</my-button>
  </form>
</template>

<script>

export default {

  data(){
  return{
    task:{
      title: "",
      body: ""
    }
  }
},
  methods:{
    createTask(){
      this.task.id = Date.now();
      this.$emit('create', this.task);
      this.task = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>

</style>