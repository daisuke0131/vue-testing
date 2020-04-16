import { mount, shallowMount } from "@vue/test-utils";
import Vue from "vue";

describe("nothing vue", () => {
  test("mount and shallowMount", () => {
    const Child = Vue.component("Child", {
      name: "Child",

      template: "<div>Child component</div>"
    });

    const Parent = Vue.component("Parent", {
      name: "Parent",

      template: "<div><child /></div>"
    });

    const shallowWrapper = shallowMount(Child);
    const mountWrapper = mount(Child);

    console.log(shallowWrapper.html());
    console.log(mountWrapper.html());

    const pShallowWrapper = shallowMount(Parent);
    const pMountWrapper = mount(Parent);

    console.log(pShallowWrapper.html());
    console.log(pMountWrapper.html());
  });
});
