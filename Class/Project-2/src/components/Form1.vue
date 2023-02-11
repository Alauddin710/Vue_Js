<template>
  <div class="container">
    <pre
      >{{ JSON.stringify(formValues, null, 2) }}
    </pre>
    <br />
    Name: {{ name }} <br />
    Email: {{ email }}
    <form v-on:submit="dataSubmit" action="">
      <div class="mb-3 mt-3">
        <label for="name" class="form-label">Name:</label>
        <input
          type="text"
          v-model.trim="formValues.name"
          class="form-control"
          id="name"
          placeholder="Enter Name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input
          type="email"
          v-model.lazy="formValues.email"
          class="form-control"
          placeholder="Enter Email"
        />
      </div>

      <div class="mb-3">
        <label for="age" class="form-label">Age:</label>
        <input
          type="text"
          v-model.number="formValues.age"
          class="form-control"
          placeholder="Enter age"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">District:</label>
        <select id="" class="form-controll" v-model="formValues.district">
          <option value="">Select One</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Khulna">Khulna</option>
          <option value="Pabna">Pabna</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Gender:</label>
        <input type="radio" v-model="formValues.gender" value="Male" />
        <input type="radio" v-model="formValues.gender" value="Female" />
      </div>
      <div class="mb-3">
        <label class="form-label">Education:</label>
        <select
          id=""
          class="form-controll"
          v-model="formValues.education"
          multiple
        >
          <option value="">Select One</option>
          <option value="SSC">S.S.C</option>
          <option value="HSC">H.S.C</option>
          <option value="BSS">B.S.S</option>
          <option value="MSS">M.S.S</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="courses" class="form-label">Courses:</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Php"
            v-model="formValues.courses"
          />
          <label class="form-check-label">Php</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Java"
            v-model="formValues.courses"
          />
          <label class="form-check-label">Java</label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Css"
            v-model="formValues.courses"
          />
          <label class="form-check-label">Css</label>
        </div>
      </div>
      <button type="submit" value="Submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        district: "",
        gender: "",
        education: [],
        courses: [],
        age: "",
      },
    };
  },
  methods: {
    dataSubmit(event) {
      event.preventDefault();
      console.log(this.formValues);
    },
  },
};
</script>

<style></style>
