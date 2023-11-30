<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <LogoApp />

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="col-4 collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav align-items-center mb-2 mb-lg-0 mx-auto">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Главная</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/about">Менеджерам</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Стадионы
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/">Минск</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Минская область</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Витебская область</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Могилевская область</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Гомельская область</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Брестская область</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Гродненская область</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">FAQ</router-link>
          </li>
        </ul>
      </div>
      <div class="col-4 d-none d-lg-flex">
        <form class="d-flex mx-auto" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoApp from "./ui-component/LogoApp.vue";

export default { components: { LogoApp } };
</script>

<style>
.header {
  background: black;
}

.logo p {
  text-shadow: 1px 1px 1px rgb(55, 54, 59), -1px 1px 1px rgb(135, 134, 137);
  color: rgb(166, 165, 171);
  transition: all 0.5s;
  margin: 0;
}

.logo p:hover {
  text-shadow: -1px -1px 1px silver, 1px -1px 1px silver;
  color: white;
}
</style>