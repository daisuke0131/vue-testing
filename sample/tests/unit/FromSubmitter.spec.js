import { shallowMount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";
import flushPromises from "flush-promises";

let url = "";
let data = "";

const mockHttp = {
  get: (_url, _data) => {
    return new Promise(resolve => {
      url = _url;
      data = _data;
      resolve();
    });
  }
};

describe("FromSubmitter.vue", () => {
  test("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter);

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );
  });

  it("reveals a notification when submitted", async () => {
    const wrapper = shallowMount(FormSubmitter, {
      data() {
        return {
          asyncTest: true
        };
      },
      mocks: {
        $http: mockHttp
      }
    });

    wrapper.find("[data-username]").setValue("alice");
    wrapper.find("form").trigger("submit.prevent");

    await flushPromises();

    expect(wrapper.find(".message").text()).toBe(
      "Thank you for your submission, alice."
    );
  });
});
