import renderer from "react-test-renderer";
import PageContent from "../components/PageContent";

test("renders correctly", () => {
  const tree = renderer.create(<PageContent />).toJSON();

  expect(tree).toMatchSnapshot();
});
