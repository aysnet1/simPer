<template>





            <img width="100%" class="imgr" src="/cover.png" alt="">






</template>

<style>
.VueToNuxtLogo {
  display: inline-block;

  position: relative;

  /* height: 180px;*/
  width: 100%;
}

.imgr {

  display: inline-block;

  position: relative;

}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41B883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3B8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495E;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
