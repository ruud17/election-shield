import renderer from "react-test-renderer";
import VoteConfirmationMsg from "../components/VoteConfirmationMsg";

test("renders correctly", () => {
  const tree = renderer.create(<VoteConfirmationMsg />).toJSON();

  expect(tree).toMatchSnapshot();
});
