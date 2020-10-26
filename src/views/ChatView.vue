<template>
  <div class="columns is-multiline">
    <div class="column is-6">
      <ContactsList/>
    </div>
    <div class="column is-6">
      <ChatBox/>
    </div>
  </div>
</template>

<script>
import ContactsList from "../components/modules/chat/ContactsList";
import ChatBox from "../components/modules/chat/ChatBox";

export default {
  components: {
    ContactsList,
    ChatBox
  }
}
</script>