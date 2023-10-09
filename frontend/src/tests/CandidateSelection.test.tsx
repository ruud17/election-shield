import renderer from "react-test-renderer";
import CandidatesSelection from "../components/CandidatesSelection";
import { CandidatesSelectionProps } from "../components/CandidatesSelection";

const componentProps: CandidatesSelectionProps = {
  selectedCandidate: "Test Candidate",
  handleOptionChange: () => {},
};

test("renders correctly", () => {
  const tree = renderer
    .create(<CandidatesSelection {...componentProps} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
