import renderer from "react-test-renderer";
import VoterDetailsForm from "../components/VoterDetailsForm";
import { VoterDetailsFormProps } from "../components/VoterDetailsForm";

const componentProps: VoterDetailsFormProps = {
  voterDetails: {
    email: "johndoe@test.com",
    firstName: "John",
    lastName: "Doe",
    identity_id: "1234567",
  },
  handleInputChange: () => {},
  formErrors: { lastName: "Required" },
};

test("renders correctly", () => {
  const tree = renderer
    .create(<VoterDetailsForm {...componentProps} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
