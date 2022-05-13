<template>
  <div class="tasksList__container" v-if="tasks.length > 0">
    <h2>Список задач</h2>
    <transition-group name="task-list">
      <task-item
          v-for="task in tasks" :key="task.id"
          :task="task"
          @remove="$emit('remove', task)"
      />
    </transition-group>
    </div>
  <h2 v-else class="task__empty">Список задач пуст!</h2>
</template>

<script>
import TaskItem from "@/components/TaskItem";
export default {
  components: {TaskItem},
  props: {
   tasks: {
     type: Array,
     required: true,
   }
 }
}
</script>

<style scoped>

</style>