import renderer from "react-test-renderer";
import ErrorPreviewBox from "../components/ErrorPreviewBox";
import { ErrorPreviewBoxProps } from "../components/ErrorPreviewBox";

const componentProps: ErrorPreviewBoxProps = {
  errors: [
    {
      message: "API error",
      description: "Could not connect to external server",
    },
  ],
};

test("renders correctly", () => {
  const tree = renderer
    .create(<ErrorPreviewBox {...componentProps} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
