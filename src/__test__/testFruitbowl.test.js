import { shallow, mount } from "enzyme";
// import toJson from "enzyme-to-json";
import Fruitbowl from '../components/Fruitbowl'



it("renders without crashing", () => {
  shallow(<Fruitbowl />);
});

it("renders Account header", () => {
  const wrapper = shallow(<Fruitbowl />);
  const welcome = <h1 className='App-header'>fruitbowl</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});