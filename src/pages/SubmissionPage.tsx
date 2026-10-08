import { Link } from "react-router-dom";
import { GOOGLE_FORM_URL, submissionGuidelines } from "../data/submission";

export function SubmissionPage() {
  return (
    <div className="page">
      <h1>Submit a Time</h1>
      <p className="lede">
        Share your lap with the PA List leaderboard. Please review the guidelines before
        submitting.
      </p>

      <section className="wr-box">
        <div className="wr-label">Submission Guidelines</div>
        <ul className="submission-guidelines">
          {submissionGuidelines.map((guideline) => (
            <li key={guideline}>{guideline}</li>
          ))}
        </ul>
      </section>

      <a className="submit-button" href={GOOGLE_FORM_URL}>
        Submit Your Time
      </a>
      <p className="submission-note">The form opens in this browser tab.</p>
      <p>
        <Link to="/">Back to leaderboard</Link>
      </p>
    </div>
  );
}
