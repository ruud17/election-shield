import renderer from "react-test-renderer";
import SubmitVote from "../components/SubmitVote";
import { SubmitVoteProps } from "../components/SubmitVote";

const componentProps: SubmitVoteProps = {
  isTermsCheckboxConfirmed: false,
  handleChange: () => {},
  dataToPost: {
    selectedCandidate: "Joe Biden",
    voterDetails: {
      email: "johndoe@test.com",
      firstName: "John",
      lastName: "Doe",
      identity_id: "1234567",
    },
  },
  setDisplaySuccessVotingMsg: (status: boolean) => {},
  setFormErrors: (error: Record<string, string>) => {},
};

test("renders correctly", () => {
  const tree = renderer.create(<SubmitVote {...componentProps} />).toJSON();

  expect(tree).toMatchSnapshot();
});
