import { shallowMount } from "@vue/test-utils";
import FormSubmitter from "@/components/FormSubmitter.vue";
// import flushPromises from "flush-promises";

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

var scheduler = typeof setImmediate === "function" ? setImmediate : setTimeout;

function flushPromises() {
  return new Promise(function(resolve) {
    console.log(resolve.toString);
    scheduler(resolve);
  });
}

module.exports = flushPromises;

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

    expect(url).toBe("/api/v1/register");
    expect(data).toEqual({ username: "alice" });
  });
});
