<template>
  <div class="tasks">
    <div>
      <div><strong>Название: </strong>{{task.title}} </div>
      <div><strong>Описание: </strong>{{task.body}} </div>
    </div>
    <div class="tasks__btn">
      <my-button @click="$emit('remove', task)">Удалить</my-button>
      <!--<button class="task-btn">Изменить</button>-->
    </div>

  </div>
</template>

<script>

export default {
  props: {
  task:{
    type: Object,
    required: true
  }
}
}
</script>

<style scoped>

</style>