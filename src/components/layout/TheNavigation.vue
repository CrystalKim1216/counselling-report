<template>
  <aside>
    <p>Counselling</p>
    <router-link to="/">
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-house" />
      </div>
      Home
    </router-link>
    <router-link to="/students">
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-users" />
      </div>
      Students
    </router-link>
    <router-link to="/counselling">
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-school" />
      </div>
      Report
    </router-link>
  </aside>
</template>

<style scoped>
.container {
  display: flex;
}

aside {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  color: #fff;
  width: 200px;
  padding-left: 20px;
  height: 100vh;
  background-image: linear-gradient(30deg, var(--color-nav), var(--color-nav2));
  border-top-right-radius: 80px;
  font-size: 17px;
}

aside svg {
  margin-right: 10px;
}

aside a {
  color: #fff;
  display: flex;
  padding: 12px;
  padding-left: 30px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

aside a .icon {
  width: 20px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

aside a:hover {
  color: var(--color-nav2);
  background: #fff;
  outline: none;
  position: relative;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

aside a:hover::after {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: 100%;
  right: 0;
  height: 35px;
  width: 35px;
  border-bottom-right-radius: 18px;
  box-shadow: 0 20px 0 0 #fff;
}

aside a:hover::before {
  content: "";
  position: absolute;
  background-color: transparent;
  top: 48px;
  right: 0;
  height: 35px;
  width: 35px;
  border-top-right-radius: 18px;
  box-shadow: 0 -20px 0 0 #fff;
}

aside p {
  margin: 0;
  padding: 40px 0;
}
</style>
