<template>
  <div>
    <PerfectScrollbarWrapper height=" 75vh">
      <div>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      </div>
    </PerfectScrollbarWrapper>
    <ChatEntry/>
  </div>

</template>

<script>
import PerfectScrollbarWrapper from "../../PerfectScrollbarWrapper";
import ChatMessage from "./ChatMessage";
import ChatEntry from "./ChatEntry";

export default {
  components: {
    PerfectScrollbarWrapper,
    ChatMessage,
    ChatEntry
  }
}
</script>

