<template>
  <div class="row">
    <div class="col-md-3 offset-md-3">
      <div>
        <div>
          <h3>Login</h3>
          <p>{{ name }}</p>
          <hr />
        </div>
        <form action="">
          <div class="form-group">
            <label for="">Email</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" />
          </div>
          <div class="my-3"><button class="btn btn-primary">Login</button></div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup></script>
