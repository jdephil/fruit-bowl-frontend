import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow, mount } from "enzyme";

it.skip("renders correctly", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});
