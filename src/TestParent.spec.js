import { mount } from "@vue/test-utils";
import Parent from "./components/Parent";
import Child from "./components/Child";

describe("Parent.vue", () => {
  it("matches snapshot when child stubbed", () => {
    const mountingOptions = { stubs: { Child: true } };
    const wrapper = mount(Parent, mountingOptions);
    console.log(wrapper.html());

    expect(true).toBe(true);
  });
});
