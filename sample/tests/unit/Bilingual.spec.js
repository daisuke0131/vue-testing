import { mount } from "@vue/test-utils";
import Bilingual from "@/components/Bilingual.vue";

describe("Bilingual", () => {
  it("renders successfully", () => {
    const wrapper = mount(Bilingual);
    console.log(wrapper.html())
  });
});
