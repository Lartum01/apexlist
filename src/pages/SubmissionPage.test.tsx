import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Layout } from "../components/Layout";
import { GOOGLE_FORM_URL, submissionGuidelines } from "../data/submission";
import { SubmissionPage } from "./SubmissionPage";

describe("submission flow", () => {
  it("navigates from the site header to the submission guidelines", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>Leaderboard</h1>} />
            <Route path="/submit" element={<SubmissionPage />} />
          </Routes>
        </Layout>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("link", { name: "Submit a Time" }));

    expect(screen.getByRole("heading", { name: "Submit a Time" })).toBeInTheDocument();
    expect(screen.getByText(submissionGuidelines[0])).toBeInTheDocument();
  });

  it("links directly to the configured Google Form in the current tab", () => {
    render(
      <MemoryRouter>
        <SubmissionPage />
      </MemoryRouter>
    );

    const formLink = screen.getByRole("link", { name: "Submit Your Time" });
    expect(formLink).toHaveAttribute("href", GOOGLE_FORM_URL);
    expect(formLink).not.toHaveAttribute("target");
    expect(GOOGLE_FORM_URL).toContain("REPLACE_WITH_YOUR_FORM_ID");
  });
});
