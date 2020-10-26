<template>
  <li>
    <div class="card is-pointer">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://picsum.photos/96" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="">John Smith</p>
            <span class="status"></span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<style scoped>
.status {
  width: 8px;
  height: 8px;
  display: flex;
  border-radius: 100%;
  background: red;
}
</style>