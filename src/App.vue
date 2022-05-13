<template>
  <div id="app">
    <div class="createTask__container">
    <h1 class="dialog_heading">Страница с задачами</h1>
      <my-input v-model="searchTask" placeholder="Поиск по названию...">

      </my-input>
      <div class="app__btns">
        <my-button class="dialog_btn" @click="showDialog">Создать задачу</my-button>
        <my-select v-model="selectedSort" :options="sortOptions">

        </my-select>
      </div>
    </div>
    <dialog-window v-model:show="dialogVisible">
      <TaskForm
          @create="createTask"
      />
    </dialog-window>

    <TaskList
        :tasks="searchedAndsortedTask"
        @remove="removeTask"
    />
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import DialogWindow from "@/components/UI/DialogWindow";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";

export default {
  components: {
    MySelect,
    DialogWindow,
    TaskForm,
    TaskList
  },
  data(){
    return{
      tasks:[],
      dialogVisible: false,
      selectedSort: '',
      searchTask:'',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ]
    }
  },
  methods:{
    createTask(task){
      this.tasks.push(task);
      this.dialogVisible = false;
    },
    removeTask(task){
      this.tasks = this.tasks.filter(value => {
        return value.id !== task.id
      })
    },
    showDialog(){
      this.dialogVisible = true;
    },
    async fetchTasks(){
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.tasks = response.data;
        console.log(response);
      } catch (e) {
        alert('Error')
      }

    }
   },
  mounted() {
    this.fetchTasks();
  },
  computed: {
    sortedTasks(){
      return [...this.tasks].sort((task1, task2) => {
        return task1[this.selectedSort]?.localeCompare(task2[this.selectedSort])
      });
    },
    searchedAndsortedTask(){
      return this.sortedTasks.filter(task => task.title.toLowerCase().includes(this.searchTask.toLowerCase()));
    }
  },
  /*watch: {
    selectedSort(newValue){
      console.log(newValue);
      this.tasks.sort((task1, task2) => {
        return task1[newValue]?.localeCompare(task2[newValue])
      })
    }
  }*/
}
</script>

<style scoped>

</style>