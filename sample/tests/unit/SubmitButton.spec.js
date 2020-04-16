import { mount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton.vue";

const msg = "submit";
const factory = propsData => {
  return mount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  });
};

describe("SubmitButton.vue", () => {
  it("displays a non authorized message", () => {
    const wrapper = factory();

    console.log(wrapper.html());

    expect(wrapper.find("span").text()).toBe("Not Authorized");
    expect(wrapper.find("button").text()).toBe("submit");
  });

  it("displays a admin privileges message", () => {
    const wrapper = factory({ isAdmin: true });

    console.log(wrapper.html());

    expect(wrapper.find("span").text()).toBe("Admin Privileges");
    expect(wrapper.find("button").text()).toBe("submit");
  });
});
