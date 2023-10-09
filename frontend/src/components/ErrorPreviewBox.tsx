import { FC } from "react";
import { Row, Alert } from "react-bootstrap";
import { ViewError } from "../utils/error";

interface ErrorPreviewBoxProps {
  errors: unknown[];
}

const ErrorPreviewBox: FC<ErrorPreviewBoxProps> = ({ errors }) => {
  return (
    <Row>
      {errors.map((err, ind) => (
        <Alert variant="danger" key={ind}>
          <p className="mb-0">{ViewError.makeNewErrorToDisplay(err)}</p>
        </Alert>
      ))}
    </Row>
  );
};

export default ErrorPreviewBox;
