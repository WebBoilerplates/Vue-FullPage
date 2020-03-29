<template>
  <div id="fullpage">
    <transition :name="animation">
      <router-view
        class="fullpage__option"
        :style="{transition: (Options.transtionTime / 1000)+'s'}"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "fullpage",
  props: {
    Options: Object
  },
  data() {
    return {
      animation: "",
      progressState: false,
      positionNumber: 0,
      touchPositionStart: 0,
      touchPositionEnd: 0,
      mousePositionStart: 0,
      mousePositionEnd: 0
    };
  },
  mounted() {
    document
      .getElementById("fullpage")!
      .addEventListener("wheel", (event: WheelEvent) => {
        if (event.deltaY > 0 && !this.progressState) {
          this.progress("down");
        } else if (event.deltaY < 0 && !this.progressState) {
          this.progress("up");
        }
      });
    document
      .getElementById("fullpage")!
      .addEventListener("touchstart", (event: TouchEvent) => {
        this.touchPositionStart = event.touches[0].clientY;
      });
    document
      .getElementById("fullpage")!
      .addEventListener("touchmove", (event: TouchEvent) => {
        this.touchPositionEnd = event.touches[0].clientY;
      });
    document
      .getElementById("fullpage")!
      .addEventListener("touchend", (event: TouchEvent) => {
        if (
          this.touchPositionStart > this.touchPositionEnd &&
          !this.progressState
        ) {
          this.progress("down");
        } else if (
          this.touchPositionStart < this.touchPositionEnd &&
          !this.progressState
        ) {
          this.progress("up");
        }
        this.touchPositionStart = 0;
        this.touchPositionEnd = 0;
      });
    document
      .getElementById("fullpage")!
      .addEventListener("mousedown", (event: MouseEvent) => {
        this.mousePositionStart = event.clientY;
      });
    document
      .getElementById("fullpage")!
      .addEventListener("mouseup", (event: MouseEvent) => {
        this.mousePositionEnd = event.clientY;
        if (
          this.mousePositionStart > this.mousePositionEnd &&
          !this.progressState
        ) {
          this.progress("down");
        } else if (
          this.mousePositionStart < this.mousePositionEnd &&
          !this.progressState
        ) {
          this.progress("up");
        }
        this.mousePositionStart = 0;
        this.mousePositionEnd = 0;
      });
  },
  methods: {
    progress(reaction: string) {
      this.animation = reaction;
      this.progressState = true;
      this.positionNumber = this.Options.routes.indexOf(
        window.location.pathname.replace(this.Options.BasicPath, "")
      );
      if (reaction === "up" && this.positionNumber !== 0) {
        setTimeout(() => {
          this.progressState = false;
        }, this.Options.transtionTime);
        --this.positionNumber;
        console.log(this.Options.routes[this.positionNumber]);

        this.$router.push(this.Options.routes[this.positionNumber]);
      } else if (
        reaction === "down" &&
        this.positionNumber != this.Options.routes.length - 1
      ) {
        setTimeout(() => {
          this.progressState = false;
        }, this.Options.transtionTime);
        ++this.positionNumber;
        console.log(this.Options.routes[this.positionNumber]);
        this.$router.push(this.Options.routes[this.positionNumber]);
      } else {
        this.progressState = false;
      }
    }
  }
});
</script>

<style>
#fullpage {
  overflow: hidden;
}
.fullpage__option {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
.up-leave {
  transform: translateY(0);
}
.up-leave-to {
  transform: translateY(100%);
}
.up-enter {
  transform: translateY(-100%);
}
.up-enter-to {
  transform: translateY(0);
}
.down-leave {
  transform: translateY(0);
}
.down-leave-to {
  transform: translateY(-100%);
}
.down-enter {
  transform: translateY(100%);
}
.down-enter-to {
  transform: translateY(0);
}
</style>