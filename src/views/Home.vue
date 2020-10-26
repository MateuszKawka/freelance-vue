<template>
  <div class="home">
    <div class="columns is-multiline">
      <div class="column is-3 is-offset-1">
        <ChatBox/>
      </div>
      <div class="column is-3 is-offset-1">
        <EventsBox/>
      </div>
      <div class="column is-3 is-offset-1">
        <NotesBox/>
      </div>
    </div>
  </div>
</template>

<script>
import ChatBox from "../components/modules/home/ChatBox";
import EventsBox from "../components/modules/home/EventsBox";
import NotesBox from "../components/modules/home/NotesBox";

export default {
  name: 'Home',
  components: {
    ChatBox,
    EventsBox,
    NotesBox
  }
}
</script>
