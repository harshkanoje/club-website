import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
        <footer class=" text-center"
        style={{backgroundColor : "#fbdbdc"}}
        >
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Form --> */}
    <section class="">
      <form action="">
        {/* <!--Grid row--> */}
        <div class="row d-flex justify-content-center">
          {/* <!--Grid column--> */}
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-md-5 col-12">
            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
              <input type="email" id="form5Example27" class="form-control" />
              {/* <label class="form-label" for="form5Example27">Email address</label> */}
            </div>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-auto">
            {/* <!-- Submit button --> */}
            <button type="submit" class="btn btn-secondary mb-4 bg-dark">
              Subscribe
            </button>
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </form>
    </section>
    {/* <!-- Section: Form --> */}
  </div>
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
    <a class="btn text-white btn-floating m-1"
      style={{backgroundColor : "#dd4b39"}}
      href="https://vitbhopal.ac.in/"
      role="button" 
      target="_top">
       <i class="fas fa-university"></i> </a>

      {/* <!-- Twitter --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor : "#55acee"}}
        href="https://twitter.com/DSC_VITB?t=X0T2kN4F3iDVbXgmeEXjJQ&amp;s=08"
        role="button" target="_blank"
        ><i class="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      

      {/* <!-- Instagram --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor : "#ac2bac"}}
        href="https://www.instagram.com/dsc_vitb"
        role="button" target="_blank"
        ><i class="fab fa-instagram"></i>
        </a>

      {/* <!-- Linkedin --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor : "#0082ca"}}
        href="https://www.linkedin.com/in/data-science-club-vit-bhopal-5b9b02232"
        role="button" target="_blank"><i class='fab fa-linkedin'></i>
        </a>
      {/* <!-- Github --> */}
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor : "#333333"}}
        href="https://github.com/cdsvitbhopal"
        role="button" target="_blank"
        ><i class="fab fa-github"></i
      ></a>
      <a
        class="btn text-white btn-floating m-1"
        style={{backgroundColor : "#FF0000"}}
        href="https://www.youtube.com/channel/UC5pB8eW_kDoimQ5s4S7QgeA"
        role="button" target="_blank"
        ><i class="fab fa-youtube"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}
  {/* <!-- Copyright --> */}
  <div class="text-center p-3" 
  style={{backgroundColor : '#f690e5'}} >
  
    © 2023 Copyright: 
    <a class="text-dark" href="https://mdbootstrap.com/"
    style={{fontWeight: "bold"}} > @HarshKanoje </a>
  </div>
  {/* <!-- Copyright --> */}

  </footer>
    )
  }
}

export default Contact
