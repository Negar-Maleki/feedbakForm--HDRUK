import { useState } from "react";

import styled from "styled-components";
import StarRating from "./StarRating";
import { submitApi } from "../client/submit";

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
`;

function FeedbackForm() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = comment.trim() !== "" && rating > 0;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const { success, message } = await submitApi(comment, rating);
      alert(message);
      if (success) {
        setComment("");
        setRating(0);
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
      return;
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <StyledFrom onSubmit={handleSubmit}>
      <StarRating onSetRating={setRating} rating={rating} />
      <label htmlFor="name">Please enter your comments:</label>
      <textarea
        placeholder="Write your feedback here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={5}
        cols={40}
        disabled={isSubmitting}
      />

      {isFormValid ? (
        <p style={{ color: "green", marginTop: "0px" }}>
          Form is valid and ready to submit.
        </p>
      ) : (
        <p style={{ color: "red", marginTop: "0px" }}>
          Please fill out all fields before submitting.
        </p>
      )}
      <button type="submit" disabled={isSubmitting || !isFormValid}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </StyledFrom>
  );
}

export default FeedbackForm;
